import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _HttpClient:HttpClient) { }
  getAllProducts(){
    return this._HttpClient.get(Environment.baseApi +'products')
  }
  getAllCategories(){
    return this._HttpClient.get(Environment.baseApi+'products/categories')
  }

  getCategoryByFilter(key : string){
    return this._HttpClient.get(Environment.baseApi + 'products/category/'+key)
  }
  getProductById(id : any){
    return this._HttpClient.get(Environment.baseApi + 'products/'+id)
  }
}
