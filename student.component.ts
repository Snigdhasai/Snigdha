import { Component, OnInit } from '@angular/core';
import { Student } from 'src/Models/StudentModel';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
stuID:number=0;
stuName:string="";
stuCity:string="";

nos:number[]=[1,2,3,4,5];
plist:Student[]=[];

 plist1:Student[]=
 [
  new Student(1,"Siri","Pune"),
  new Student(2,"Hari","Punjab"),
  new Student(3,"Ravi","patna"),
  new Student(4,"kriya","bangalore"),
  new Student(5,"Kiyai","Hyderabad")
 ];

filterStudents=[];

 Save($event:any)
{
  /*console.log(this.stuID);
  console.log(this.stuName);
  console.log(this.stuCity);*/
  console.log(this.searchCity);
    
}

searchCity:string="";
 students=
 [
  {"id":1,"name":"Siri",city:"Pune"},
  {"id":2,"name":"Hari",city:"Punjab"},
  {"id":3,"name":"Ravi",city:"Patna"},
  {"id":4,"name":"kriya",city:"Bangalore"},
  {"id":4,"name":"Kiya",city:"Hyderabad"}
 ];

 
  constructor() 
  { 
     
  }


  ngOnInit(): void {
  }

}
