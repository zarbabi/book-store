import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'store', loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)},
  {path: 'panel', loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelModule)},

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
