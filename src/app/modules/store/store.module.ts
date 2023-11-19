import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorePageComponent } from './components/store-page/store-page.component';
import {RouterModule, Routes} from "@angular/router";

const routes:Routes=[{
  path:'' ,component:StorePageComponent
}]

@NgModule({
  declarations: [
    StorePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StoreModule { }
