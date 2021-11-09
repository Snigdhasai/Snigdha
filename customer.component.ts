import { Component, OnInit } from '@angular/core';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { customerModel } from 'src/Models/customerModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customerID:number=0;
customerName:string="";
customerCity:string="";

pageName="Customer Details";

myaquaborder="aquaborder";
mygreyborder="greyborder";
myaquamarineborder="aquamarineborder";
myparacolor="peru";

SaveClick($event:any)
{
  console.log(this.customerID);
  console.log(this.customerName);
  console.log(this.customerCity);

  let c=(this.customerID,this.customerName,this.customerCity);
}

  constructor() { }

  ngOnInit(): void {
  }

}
