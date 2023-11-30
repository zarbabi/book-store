import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  userName: string = '';
  routeUrl: string = '';

  constructor(public router: Router) {
  }

  getUser(text: string) {
    this.userName = text;
  }

  checkUsername() {
    if (this.userName == 'user') {
       // this.routeUrl = 'store';
      this.router.navigate(['/', 'store']);
    }
    if (this.userName == 'admin') {
       // this.routeUrl = 'panel';
      this.router.navigate(['/', 'panel']);
    }
  }


}
