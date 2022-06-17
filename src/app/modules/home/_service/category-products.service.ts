import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApisURI } from 'src/app/shared/apis-uri';
import { Product } from '../../product/_model/product';
import { ProductRandom } from '../_model/ProductRandom';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {
  private apiURI = ApisURI.dwf20221apiURI;
  private resource = "/product/category";

  constructor(
    private http: HttpClient
  ) { }

  getProducts(category: number){
    return this.http.get<ProductRandom[]>(this.apiURI + this.resource + `/${category}`);
  }
}
