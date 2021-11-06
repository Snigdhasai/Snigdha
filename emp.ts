class employee
{

    /*empid:number;
    empname:string;
    constructor(empno:number,ename:string)
    {
        this.empid=empno;emp
        this.empname=ename;
    }
    
    display=()=>
    {
        console.log(this.empid);
        console.log(this.empname);
    }*/

    private static empcount:number=0;

   private _empid:number;
   private _empname:string;

   public getEmpCount()
   {
       return employee.empcount;
   }


   constructor()
   {
    employee.empcount=employee.empcount+1;
   }

    public set employeeid(v : number)
    {
        this._empid = v;
    }

    public get employeeid() : number
    {
        return this._empid;
    }

    public set employeename(v : string) {
        this._empname = v;
    }
    
    public get employeename() : string {
        return this._empname;
    }

    display=()=>
    {
        console.log(this._empid);
        console.log(this._empname);
    }
    
}

/*var e1=new employee(1,"Siri");
var e2=new employee(2,"Sirisha");
e1.display();
console.log("--------------");
e2.display();*/

var e1=new employee();
e1.employeeid=1;
e1.employeename="Siri";
console.log("you entered employee id= " +e1.employeeid);
console.log("you entered employee name= " +e1.employeename);
e1.display();
var c1:number=e1.getEmpCount();
console.log("Employee Count= " +c1);

console.log("--------------");

var e2=new employee();
e2.employeeid=2;
e2.employeename="Abhi";
console.log("you entered employee id= " +e2.employeeid);
console.log("you entered employee name= " +e2.employeename);
e2.display();
var c1:number=e2.getEmpCount();
console.log("Employee count= " +c1);

console.log("--------------");

var e3=new employee();
e3.employeeid=3;
e3.employeename="Abhishek";
console.log("you entered employee id= " +e3.employeeid);
console.log("you entered employee name= " +e3.employeename);
e3.display();
var c1:number=e3.getEmpCount();
console.log("Employee count= " +c1);