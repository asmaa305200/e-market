import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _HttpClient:HttpClient) { }
  createNewCart(model:any){
    return this._HttpClient.post(Environment.baseApi + 'carts' , model)
  }
}
