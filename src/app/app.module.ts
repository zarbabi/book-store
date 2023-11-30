import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PanelModule} from "./modules/panel/panel.module";
import {StoreModule} from "./modules/store/store.module";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // PanelModule,
    //   StoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
