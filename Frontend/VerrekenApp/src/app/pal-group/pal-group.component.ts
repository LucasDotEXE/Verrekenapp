import { ViewChild, ElementRef, Component, OnInit } from '@angular/core';
import { Payment } from '../dataClasses/Payment';
import { PaymentGroup } from '../dataClasses/PaymentGroup';

import { USERS, PAYMENTGROUPS, PAYMENTS, LOGGED_IN_ASS, ADMIN } from '../dataClasses/MockData';
import { User } from '../dataClasses/User';



@Component({
  selector: 'app-pal-group',
  templateUrl: './pal-group.component.html',
  styleUrls: ['./pal-group.component.scss']
})


export class PalGroupComponent implements OnInit {

  

  relevantPayments?: Payment[] = [];
  groups = PAYMENTGROUPS.filter(this.isLoggedInAss);
  selectedGroup?: PaymentGroup = undefined;

  peopleForPayment: Array<User> = [];

  amountOwedToUser = new Map();

  updatePaymentProfeteerStatus(payment :Payment, user :User, state :boolean) {
    this.amountOwedToUser.delete(payment);
    payment.profeteers.forEach(profeteer => {
      if (profeteer.user == user) {
        profeteer.hasPayed = state;
      }
    });
    this.updatePayment(payment);
  }

  addPayment(amount: string): void {
      if (!isNaN(Number(amount))) {
        var thing = [];
        for (var person of this.peopleForPayment) {
          thing[thing.length] = {user: person, hasPayed: false};
        }
        if (this.selectedGroup && LOGGED_IN_ASS && thing.length > 0 && this.relevantPayments) {
          var newPayment = {id: PAYMENTS.length, groupId: this.selectedGroup.id, payer: LOGGED_IN_ASS, amount: Number(amount), 
            profeteers: thing};
          PAYMENTS[PAYMENTS.length] = newPayment;
          this.relevantPayments[this.relevantPayments?.length] = newPayment;
          this.updatePaymentProfeteerStatus(newPayment, newPayment.profeteers[0].user, newPayment.profeteers[0].hasPayed);
        }
      }     
  }

  addPeopleForPayment(user: User, shouldPay: boolean) {
    if (shouldPay) {
      if (!this.peopleForPayment.includes(user)) {
        this.peopleForPayment.push(user);
      }
    } else {
      if (this.peopleForPayment.includes(user)) {
        delete this.peopleForPayment[this.peopleForPayment.indexOf(user)];
      }
    }
  }

  updatePayment(payment :Payment) {
        this.amountOwedToUser.set(payment, this.amountToBePayed(payment));
  }

  

  amountToBePayed(payment :Payment): Number {
    var number = 0;
    for (var userPayed of payment.profeteers) {
      if (!userPayed.hasPayed) {
        number += payment.amount/payment.profeteers.length;
      }
    }
    return number;
  }


  isLoggedInAss(element:PaymentGroup, index:number, array:PaymentGroup[]) {
    for (let user of element.users) {
      if (user == LOGGED_IN_ASS || LOGGED_IN_ASS == ADMIN) {
        return true;
      }
    }
    return false;
  }

  isLoggedInUser(user:User) {
    return user == LOGGED_IN_ASS || LOGGED_IN_ASS == ADMIN;
  }

  constructor() {
    
   }

  ngOnInit(): void {

  }

  getPayments(): Payment[] {
    if (this.relevantPayments) {
      return this.relevantPayments;
    } else {
      return [];
    }
  }

  getGroupNetTotal(group: PaymentGroup): Number {
    var total = 0;

    for(var payment of this.getPaymentsOfGroup(group)) {
      if (payment.payer == LOGGED_IN_ASS) {
        for (var profeteer of payment.profeteers) {
          if (!profeteer.hasPayed) {
            total += payment.amount/payment.profeteers.length;
          }
        }
      }
      
      for (var prof of payment.profeteers) {
        if (prof.user == LOGGED_IN_ASS && !prof.hasPayed) {
          total -= payment.amount/payment.profeteers.length;
        }
      }
      
      
    }

    return total;
  }

  onSelect(group: PaymentGroup): void {
    this.relevantPayments = this.getPaymentsOfGroup(group);
    this.calculateToBePayed();
    this.selectedGroup = group;
  }

  calculateToBePayed() {
    this.amountOwedToUser.clear()
    for (let payment of this.getPayments()) {
      this.amountOwedToUser.set(payment, this.amountToBePayed(payment));
    }
  }

  getPaymentsOfGroup(group: PaymentGroup): Payment[] {
    var payments = [];
    for(let payment of PAYMENTS) {
      if (payment.groupId == group.id) {
        payments[payments.length] = payment;
      }
    }
    return payments;
  }

  onBack(): void {
    this.selectedGroup = undefined;
    this.relevantPayments = [];
  }

}
