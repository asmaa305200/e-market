import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products:Product []=[];
  cartProducts:any []=[];
  categories:any []=[];
  loading :boolean = false;
  constructor (private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts(){
    this.loading = true;
    this._ProductsService.getAllProducts().subscribe((res:any) =>{
  console.log(res);
     this.products = res;
     this.loading = false
    },error =>{
      this.loading = false

      console.log(error.message);
      
    }
  )
  }
  getCategories(){
    this.loading = true;
    this._ProductsService.getAllCategories().subscribe((res:any) =>{
  console.log(res);
     this.categories = res;
     this.loading = false
    },error =>{
      this.loading = false
      console.log(error.message);
      
    }
  )
  }

  filterCategory(event:any){
    let value = event.target.value;
    (value == 'all')? this.getProducts():this.getProductsCategory(value)
    console.log(value);
    
  }
  getProductsCategory(key:string){
    this.loading = true
    this._ProductsService.getCategoryByFilter(key).subscribe((res:any) =>{
      this.loading = false
       this.products = res;
    })
  }

  addToCart(event:any){
 if('cart' in localStorage){
  this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
  let exist = this.cartProducts.find(item => item.item.id == event.item.id);
  if (exist) {
    alert("product is aleady added!")
  }else{
      this.cartProducts.push(event);
  localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
  }
 }
 else{
  this.cartProducts.push(event);
  localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
 }
  }

}

