import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
],
  exports: [
    AllProductsComponent
  ]

})
export class ProductsModule { }
