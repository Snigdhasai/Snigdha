import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl } from '@angular/forms';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
empid:number=100;
ename:string="Siri";
deptno:number=10;
imgurl="../../assets/kitty.jpeg"
personurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkcUGV-7PmJUDUHMHY7-A9cAz6NIHeNhHP6Q&usqp=CAU"
  constructor() { }

  ngOnInit(): void {
  }

  saveClick($event:any)
  {
     //alert("button clicked");
     console.log("Hello, button clicked");
  }
}
