var gpi = 3.14;
var a = 100;
var b = 20;
var r = 3;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.showAdd = function () {
        var ans = a + b;
        console.log("Addition = " + ans);
    };
    Calculator.prototype.showSub = function () {
        var ans1 = a - b;
        console.log("Subtraction = " + ans1);
    };
    Calculator.prototype.showMul = function () {
        var ans2 = a * b;
        console.log("Multiplication = " + ans2);
    };
    Calculator.prototype.showDiv = function () {
        var ans3 = a / b;
        console.log("Division = " + ans3);
    };
    Calculator.prototype.showAreaCircle = function () {
        var ans4 = 4 * gpi * (r * r);
        console.log("Area of circle = " + ans4);
    };
    Calculator.prototype.showSquare = function () {
        var ans5 = r * r;
        console.log("Square of a side r is = " + ans5);
    };
    return Calculator;
}());
var c = new Calculator;
c.showAdd();
c.showSub();
c.showMul();
c.showDiv();
c.showAreaCircle();
c.showSquare();
