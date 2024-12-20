// import { Component, OnInit } from '@angular/core';
// import { CartsService } from '../../services/carts.service';

// @Component({
//   selector: 'app-carts',
//   templateUrl: './carts.component.html',
//   styleUrls: ['./carts.component.scss']
// })
// export class CartsComponent implements OnInit{
//   cartProduucts:any = [];
//   total:any = 0;
//   success:boolean=false;
//   constructor( private _CartsService:CartsService){}
//   ngOnInit(): void {
//     this.getCrtProducts()
//   }
//   getCrtProducts(){
//     if('cart' in localStorage){
//       this.cartProduucts = JSON.parse(localStorage.getItem("cart")!);
//   }
//   this.getTotal()
//   console.log(this.cartProduucts);
  
// }
// getTotal(){
// this.total =0 ;
// for(let x in this.cartProduucts){
//   this.total += this.cartProduucts[x].item.price * this.cartProduucts[x].quantity;
// }
// }

// addAmount(index:number){
// this.cartProduucts[index].quantity++;
// this.getTotal()
// localStorage.setItem('cart' , JSON.stringify(this.cartProduucts))
// }

// deleteAmount(index:number){
// this.cartProduucts[index].quantity--;
// this.getTotal()
// localStorage.setItem('cart' , JSON.stringify(this.cartProduucts))
// }

// detectChange(){
//   this.getTotal()
//   localStorage.setItem('cart' , JSON.stringify(this.cartProduucts))
// }

// deleteItem(index:number){
//   this.cartProduucts.splice(index ,1)
//   this.getTotal()
//   localStorage.setItem('cart' , JSON.stringify(this.cartProduucts))
// }

// clearCart(){
//   this.cartProduucts = []
//   this.getTotal()
//   localStorage.setItem('cart' , JSON.stringify(this.cartProduucts))
// }

// getCart(){
//     let products = this.cartProduucts.map( (item: any) => {
//       return {productId: item.item.id , quantity : item.quantity}
//     })
//     let model={
//     userId:products.id,
//     date : new Date(),
//     products: products
//   }
//   this._CartsService.createNewCart(model).subscribe(res =>{
//  this.success = true;
//   })
//   console.log(model);

// }

// }

import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit{
  cartProduucts: any = [];
  total: any = 0;
  success: boolean = false;

  constructor(private _CartsService: CartsService) {}

  ngOnInit(): void {
    this.getCrtProducts();
  }

  getCrtProducts() {
    if ('cart' in localStorage) {
      this.cartProduucts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotal();
    console.log(this.cartProduucts);
  }

  getTotal() {
    this.total = 0;
    for (let x in this.cartProduucts) {
      this.total += this.cartProduucts[x].item.price * this.cartProduucts[x].quantity;
    }
  }

  addAmount(index: number) {
    this.cartProduucts[index].quantity++;
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProduucts));
  }

  deleteAmount(index: number) {
    if (this.cartProduucts[index].quantity > 0) {  // Prevent decrementing below 0
      this.cartProduucts[index].quantity--;
      this.getTotal();
      localStorage.setItem('cart', JSON.stringify(this.cartProduucts));
    }
  }

  detectChange() {
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProduucts));
  }

  deleteItem(index: number) {
    this.cartProduucts.splice(index, 1);
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProduucts));
  }

  clearCart() {
    this.cartProduucts = [];
    this.getTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProduucts));
  }

  getCart() {
    let products = this.cartProduucts.map((item: any) => {
      return { productId: item.item.id, quantity: item.quantity };
    });
    let model = {
      userId: products.id,
      date: new Date(),
      products: products
    };
    this._CartsService.createNewCart(model).subscribe((res) => {
      this.success = true;
    });
    console.log(model);
  }
}
