import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/component/header/header.component';
import { NavComponent } from '../layout/component/nav/nav.component';
import { FooterComponent } from '../layout/component/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from '../exchange-rate/component/exchange-rate/exchange-rate.component';
import { RegionComponent } from '../customer/component/region/region.component';
import { HomeComponent } from '../home/component/home/home.component';
import { CategoryComponent } from '../product/component/category/category.component';
import { CustomerComponent } from '../customer/component/customer/customer.component';
import { CustomerDetailComponent } from '../customer/component/customer-detail/customer-detail.component';
import { ProductComponent } from '../product/component/product/product.component';
import { ProductDetailComponent } from '../product/component/product-detail/product-detail.component';
import { CartComponent } from '../home/component/cart/cart.component';
import { InvoiceComponent } from '../home/component/invoice/invoice.component';

const routes: Routes = [
  {path: "exchange-rate", component: ExchangeRateComponent},
  {path: "region", component: RegionComponent},
  {path: "", component: HomeComponent},
  {path: "category", component: CategoryComponent},
  {path: "customer", component: CustomerComponent},
  {path: "customer-detail/:rfc", component: CustomerDetailComponent},
  {path: "product", component: ProductComponent},
  {path: "product-detail/:gtin", component: ProductDetailComponent},
  {path: "cart", component: CartComponent},
  {path: "invoice", component: InvoiceComponent}
];

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
