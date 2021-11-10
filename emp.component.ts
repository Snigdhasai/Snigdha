import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/EmployeeModel';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit 
{
   i:number=0;
   num:number=0;
   colorname:string="";

  IsLoggedIn:boolean=false;
  IsNewUser:boolean=true;
  IsCashPayment:boolean=true;
  IsChequePayment:boolean=false;

  /*IsCashPayment:boolean=false;
  IsChequePayment:boolean=true;*/

  /*IsCashPayment:boolean=true;
  IsChequePayment:boolean=true;*/

  /*IsCashPayment:boolean=false;
  IsChequePayment:boolean=false;*/

  Gender:string="";
  emp1:Employee=new Employee(3,"Ayushi",103,"Female");


  constructor() { }

  ngOnInit(): void  
  {
    //let emp1:Employee=new Employee(1,"Siri",100,"Female");
    this.Gender=this.emp1.gender;
  }

  IsVisible:boolean=false;
  ToggleShow()
  {
    this.IsVisible=!this.IsVisible;
  }

  CheckNumber($event:any)
  {

  }


}
