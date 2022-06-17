import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApisURI } from 'src/app/shared/apis-uri';
import { Invoice } from '../_model/Invoice';
import { Item } from '../_model/Item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiURI = ApisURI.dwf20221apiURI;
  private resource = "/invoice";

  constructor(
    private http: HttpClient
  ) { }

  purchase(){
    return this.http.post(this.apiURI + this.resource + "/" + ApisURI.rfc,null)
  }

  getCart(){
    return this.http.get<Invoice[]>(this.apiURI + this.resource + `/${ApisURI.rfc}`);
  }

  getItems(id_invoice: number){
    return this.http.get<Item[]>(this.apiURI + this.resource + `/item/${id_invoice}`);
  }
}
