import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { CartsComponent } from './components/carts/carts.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    BrowserModule

  ]
})
export class CartModule { }
