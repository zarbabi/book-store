import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelPageComponent} from './components/panel-page/panel-page.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: PanelPageComponent}
];

@NgModule({
  declarations: [
    PanelPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class PanelModule {
}
