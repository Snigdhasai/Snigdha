import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { productsModel } from 'src/Models/productsModel';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productID:number=0;
productName:string="";
productPrice:number=0;


nos:number[]=[1,2,3,4,5];
plist:productsModel[]=[];

 products=[
  {"id":1,"name":"Laptops",price:50000},
  {"id":2,"name":"Mobiles",price:60000},
  {"id":3,"name":"HardDisk",price:70000},
 ];

displayProductList():void
{
   /*let p1=new productsModel(this.productID=1,this.productName="Laptops",this.productPrice=600000);
   let p2=new productsModel(this.productID=2,this.productName="Mobiles",this.productPrice=700000);
   let p3=new productsModel(this.productID=3,this.productName="HardDisk",this.productPrice=800000);
  
   this.plist=[p1,p2,p3];*/

   
}

Save($event:any)
{
  console.log(this.productID);
  console.log(this.productName);
  console.log(this.productPrice);

  let p=new productsModel(this.productID,this.productName,this.productPrice);
  
  /*console.log(this.productID=10);
  console.log(this.productName="Mobiles");
  console.log(this.productPrice=100000);*/
}
  constructor() { }

  ngOnInit(): void {
  }

}
