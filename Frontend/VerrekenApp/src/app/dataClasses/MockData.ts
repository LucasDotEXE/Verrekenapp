import { MapType } from '@angular/compiler';
import { Payment } from './Payment';
import { PaymentGroup } from './PaymentGroup';
import { User } from './User';
import { LocalStorageService } from '../local-storage.service';
 



export const ADMIN: User = {id: 0, name: 'root'};
export const USERS: User[] = [
  { id: 1, name: 'Lucas Prins' },
  { id: 2, name: 'Lucas de Bruin' },
  { id: 3, name: 'Barry' },
  { id: 4, name: 'Smirr' },
  { id: 5, name: 'Leslie' },
  { id: 6, name: 'Kevin' },
  { id: 7, name: 'Wendy' },
  { id: 8, name: 'Lucia' },
  { id: 9, name: 'Daphne' },
  { id: 10, name: 'Eli' },
  { id: 11, name: 'Sem' },
  { id: 12, name: 'Teddie' },
  { id: 13, name: 'Griffin' },
  { id: 14, name: 'Darren' },
  { id: 15, name: 'Panda' },
  { id: 16, name: 'Jesus' },
  { id: 17, name: 'Max' },
  { id: 18, name: 'Guilliam' },
  { id: 19, name: 'Ettienne' },
  { id: 20, name: 'Maurice' }
];

export const PAYMENTGROUPS: PaymentGroup[] = [
    {id: 1, name: 'zuipen met da boys', users:[USERS[0], USERS[1], USERS[10], USERS[16], USERS[15]]},
    {id: 2, name: 'pizza avond', users:[USERS[0], USERS[2], USERS[4], USERS[5], USERS[6]]},
    {id: 3, name: 'gamejam', users:[USERS[0], USERS[18], USERS[17], USERS[4], USERS[2]]},
    {id: 4, name: 'Mac party', users:[USERS[0], USERS[1], USERS[2], USERS[4], USERS[6]]},
    {id: 5, name: 'Vacantie met da boys', users:[USERS[0], USERS[2], USERS[4], USERS[5], USERS[6]]},
];

export var PAYMENTS: Payment[] = [
    {id: 1, groupId: 1, payer: USERS[0], amount: 20, 
      profeteers: [ { "user": USERS[1], "hasPayed": true}, { "user": USERS[10], "hasPayed": false} ]},
    {id: 2, groupId: 1, payer: USERS[0], amount: 40, 
      profeteers: [ { "user": USERS[15], "hasPayed": false}, { "user": USERS[16], "hasPayed": false} ]},  
    {id: 3, groupId: 2, payer: USERS[0], amount: 45.35, 
      profeteers: [ { "user": USERS[2], "hasPayed": false}, { "user": USERS[4], "hasPayed": true}, { "user": USERS[5], "hasPayed": false}, { "user": USERS[6], "hasPayed": false} ]},
    {id: 4, groupId: 3, payer: USERS[0], amount: 250, 
      profeteers: [ { "user": USERS[18], "hasPayed": false}, { "user": USERS[17], "hasPayed": false}, { "user": USERS[4], "hasPayed": false}, { "user": USERS[2], "hasPayed": false} ]},
    {id: 5, groupId: 4, payer: USERS[2], amount: 15.50, 
      profeteers: [ { "user": USERS[1], "hasPayed": false}, { "user": USERS[2], "hasPayed": false}, { "user": USERS[4], "hasPayed": false}, { "user": USERS[6], "hasPayed": false} ]},
    {id: 6, groupId: 1, payer: USERS[1], amount: 10, 
        profeteers: [ { "user": USERS[0], "hasPayed": false}, { "user": USERS[16], "hasPayed": false} ]},
    {id: 7, groupId: 5, payer: USERS[2], amount: 1232.44, 
      profeteers: [ { "user": USERS[0], "hasPayed": true}, { "user": USERS[4], "hasPayed": true}, { "user": USERS[5], "hasPayed": true}, { "user": USERS[6], "hasPayed": false} ]},
];

loadLoggedInUser();

export var LOGGED_IN_ASS: User | undefined;

export function signOut() {
  LOGGED_IN_ASS = { id: -1, name: 'Logged Out' };
  console.log(LOGGED_IN_ASS);
  saveLoggedInUser();
}

export function setLoggedInUser(user: User) {
  LOGGED_IN_ASS = user;
}

function loadLoggedInUser() {
  var localStorageString = localStorage.getItem('currentUser')
  if (localStorageString) {
    LOGGED_IN_ASS = JSON.parse(localStorageString);
  } else {
    LOGGED_IN_ASS = undefined;
  }
  
}

function saveLoggedInUser() {
  localStorage.setItem('currentUser', JSON.stringify(LOGGED_IN_ASS));
}