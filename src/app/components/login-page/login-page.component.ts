import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(public router: Router, formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      userName: ['user']
    })
  }


  checkUsername() {
    if (this.loginForm.value.userName == 'user') {
      // this.routeUrl = 'store';
      this.router.navigate(['/']);
    }
    if (this.loginForm.value.userName == 'admin') {
      // this.routeUrl = 'panel';
      this.router.navigate(['/', 'panel']);
    }
  }


}
