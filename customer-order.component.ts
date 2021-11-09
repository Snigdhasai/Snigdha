import { Component, OnInit } from '@angular/core';
import { orderDetails } from 'src/Models/orderDetails';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
oDetails:orderDetails=new orderDetails();


  constructor() { }

  ngOnInit(): void 
  {
    this.oDetails=
    {
      orderID:1,
      productID:101,
      quantity:10,
      price:100
    };
  }

  SaveClick($event:any)
  {
    console.log(this.oDetails);
  }

}
