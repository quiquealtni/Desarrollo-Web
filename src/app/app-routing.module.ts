import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from 'src/app/modules/exchange-rate/component/exchange-rate/exchange-rate.component';
import { CustomerDetailComponent } from './modules/customer/component/customer-detail/customer-detail.component';
import { CustomerComponent } from './modules/customer/component/customer/customer.component';
import { RegionComponent } from './modules/customer/component/region/region.component';
import { CartComponent } from './modules/home/component/cart/cart.component';
import { HomeComponent } from './modules/home/component/home/home.component';
import { InvoiceComponent } from './modules/home/component/invoice/invoice.component';
import { CategoryComponent } from './modules/product/component/category/category.component';

const routes: Routes = [
  {path: "exchange-rate", component: ExchangeRateComponent},
  {path: "region", component: RegionComponent},
  {path: "", component: HomeComponent},
  {path: "category", component: CategoryComponent},
  {path: "customer", component: CustomerComponent},
  {path: "customer-detail/:rfc", component: CustomerDetailComponent},
  {path: "cart", component: CartComponent},
  {path: "invoice", component: InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
