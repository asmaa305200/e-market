import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    BrowserModule,
    CartModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

