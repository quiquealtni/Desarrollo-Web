import { Injectable } from '@angular/core';
import { Product } from '../_model/product';
import { Category } from '../_model/category';
import { HttpClient } from '@angular/common/http';
import { ApisURI } from '../../../shared/apis-uri';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURI = ApisURI.dwf20221apiURI;
  private resource = "/product";

  constructor(
    private http: HttpClient
  ) { }

  getProducts(){
    return this.http.get<Product[]>(this.apiURI + this.resource);
  }

  getProduct(gtin: string){
    return this.http.get<Product>(this.apiURI + this.resource + `/${gtin}`);
  }

  createProduct(product: Product){
    return this.http.post(this.apiURI + this.resource, product);
  }

  updateProduct(product: Product){
    return this.http.put(this.apiURI + this.resource + `/${product.id_product}`, product);
  }

  deleteProduct(id_product: number){
    return this.http.delete(this.apiURI + this.resource + `/${id_product}`);
  }

  updateProductCategory(id_product: number, category: Category){
    return this.http.put(this.apiURI + this.resource + `/${id_product}` + "/category", category);
  }
}

