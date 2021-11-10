import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/EmployeeModel';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit 
{
  IsLoggedIn:boolean=true;
  IsNewUser:boolean=true;
  IsCashPayment:boolean=true;
  IsChequePayment:boolean=false;
  Gender:string="";
  emp1:Employee=new Employee(3,"Ayushi",103,"Female");


  constructor() { }

  ngOnInit(): void  
  {
    //let emp1:Employee=new Employee(1,"Siri",100,"Female");
    this.Gender=this.emp1.gender;
  }

}
