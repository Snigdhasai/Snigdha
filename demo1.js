var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.sayHello = function () {
        var empid = null;
        var ename = undefined;
        console.log('hello...good morning');
        console.log(empid);
        console.log(ename);
        ename = "siri";
        ename = ename + "Kamini";
        empid = 90;
        empid = empid + 90;
        console.log(empid);
        console.log(ename);
    };
    Employee.prototype.addNos = function (i, j) {
        var ans = i + j;
        console.log(ans);
    };
    Employee.prototype.deductNos = function (i, j) {
        return i - j;
    };
    return Employee;
}());
var emp = new Employee();
emp.sayHello();
emp.addNos(10, 20);
var a = emp.deductNos(100, 10);
console.log(a);
