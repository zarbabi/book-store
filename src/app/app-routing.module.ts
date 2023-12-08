import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)},
  {path: 'panel', loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
