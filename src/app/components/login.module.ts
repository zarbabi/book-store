import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
 path: '', component: LoginPageComponent
}]

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
     RouterModule.forChild(routes),
    HttpClientModule

  ],
  exports:[RouterModule]
})
export class LoginModule {
}
