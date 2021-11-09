import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';

@NgModule({
  declarations: [
    AppComponent,EmpComponent, ProductComponent, CustomerComponent, CustomerOrderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [CustomerOrderComponent] //bootstrap-->startup object
})
export class AppModule { }
