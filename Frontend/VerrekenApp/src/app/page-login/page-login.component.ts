import { Component, OnInit } from '@angular/core';
import { USERS, ADMIN, setLoggedInUser, LOGGED_IN_ASS } from '../dataClasses/MockData'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  login(username: String, password: String) {
    if (password == "123hihihi") {
      for (var user of USERS) {
        if (user.name == username) {
          setLoggedInUser(user);
          console.log(user);
          this.router.navigate(["/Pal-Groups"])
        }
      }
    }
    console.log(LOGGED_IN_ASS);
  }

}
