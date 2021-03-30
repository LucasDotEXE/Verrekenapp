import { Component, OnChanges, OnInit } from '@angular/core';
import { LOGGED_IN_ASS, signOut } from '../dataClasses/MockData';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username = LOGGED_IN_ASS?.name;

  constructor(private route: ActivatedRoute,
    private router: Router ) {
   }

  ngOnInit(): void {
  }

  
  isLogedIn() {
    if (LOGGED_IN_ASS?.id != -1) {
      this.username = LOGGED_IN_ASS?.name;
      return true;
    }
    return false
  }

  onClickSignOut() {
     signOut();
     this.username = 'Logged Out';
    this.goTo('/Login');
  }

  goTo(location: String) {
    console.log(LOGGED_IN_ASS);
    this.username = LOGGED_IN_ASS?.name;
    this.router.navigate([location]);
  }
  

}
