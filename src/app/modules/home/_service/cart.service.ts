import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApisURI } from 'src/app/shared/apis-uri';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiURI = ApisURI.dwf20221apiURI;
  private resource = "/cart";

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: any){
    return this.http.post(this.apiURI + this.resource,product)
  }

  getCart(rfc: string){
    return this.http.get(this.apiURI + this.resource+ "/" +rfc)
  }

  deleteProductFromCart(id_cart: number){
    return this.http.delete(this.apiURI + this.resource + `/${id_cart}`);
  }

}
