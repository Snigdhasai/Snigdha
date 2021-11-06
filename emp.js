var employee = /** @class */ (function () {
    function employee() {
        var _this = this;
        this.display = function () {
            console.log(_this._empid);
            console.log(_this._empname);
        };
        employee.empcount = employee.empcount + 1;
    }
    employee.prototype.getEmpCount = function () {
        return employee.empcount;
    };
    Object.defineProperty(employee.prototype, "employeeid", {
        get: function () {
            return this._empid;
        },
        set: function (v) {
            this._empid = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(employee.prototype, "employeename", {
        get: function () {
            return this._empname;
        },
        set: function (v) {
            this._empname = v;
        },
        enumerable: false,
        configurable: true
    });
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
    employee.empcount = 0;
    return employee;
}());
/*var e1=new employee(1,"Siri");
var e2=new employee(2,"Sirisha");
e1.display();
console.log("--------------");
e2.display();*/
var e1 = new employee();
e1.employeeid = 1;
e1.employeename = "Siri";
console.log("you entered employee id= " + e1.employeeid);
console.log("you entered employee name= " + e1.employeename);
e1.display();
var c1 = e1.getEmpCount();
console.log("Employee Count= " + c1);
console.log("--------------");
var e2 = new employee();
e2.employeeid = 2;
e2.employeename = "Abhi";
console.log("you entered employee id= " + e2.employeeid);
console.log("you entered employee name= " + e2.employeename);
e2.display();
var c1 = e2.getEmpCount();
console.log("Employee count= " + c1);
console.log("--------------");
var e3 = new employee();
e3.employeeid = 3;
e3.employeename = "Abhishek";
console.log("you entered employee id= " + e3.employeeid);
console.log("you entered employee name= " + e3.employeename);
e3.display();
var c1 = e3.getEmpCount();
console.log("Employee count= " + c1);
