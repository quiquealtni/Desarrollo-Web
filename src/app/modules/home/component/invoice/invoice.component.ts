import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../_model/Invoice';
import { Item } from '../../_model/Item';
import { InvoiceService } from '../../_service/invoice.service';

declare var $: any;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  facturas: Invoice[] = [];
  items: Item[] = [];

  constructor(
    private invoice_service: InvoiceService
  ) { }

  ngOnInit(): void {
    this.getCart()
    //this.getItems(1)
  }

  getCart(){
    this.invoice_service.getCart().subscribe(
      res => {
        this.facturas = res;
      },
      err => console.log(err)
    )
  }

  getItems(id_invoice: number){
    this.invoice_service.getItems(id_invoice).subscribe(
      res => {
        this.items = res;
      },
      err => console.log(err)
    )
  }

  verDetalle(id_invoice: number){
    this.getItems(id_invoice)
    $("#detalle").modal("show");
  }

  closeModal(){
    $("#detalle").modal("hide");
  }

}
