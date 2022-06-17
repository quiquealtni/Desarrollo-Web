import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { InvoiceComponent } from './component/invoice/invoice.component';


@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
