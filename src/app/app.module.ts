import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { ExchangeRateModule } from './modules/exchange-rate/exchange-rate.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerModule } from './modules/customer/customer.module';
import { HomeModule } from './modules/home/home.module';
import { ProductModule } from './modules/product/product.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ExchangeRateModule,
    HttpClientModule,
    CustomerModule,
    HomeModule,
    ProductModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
