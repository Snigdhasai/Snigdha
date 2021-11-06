var g = 100;
var G1 = /** @class */ (function () {
    function G1() {
        this.i = 10;
    }
    G1.prototype.showNos = function () {
        var l = 123;
        console.log("GLobal Variable = " + g);
        console.log("Local Variable = " + l);
    };
    G1.j = 20;
    return G1;
}());
var gvar = new G1();
console.log("class Variable = ", gvar.i);
console.log("Static class Variable = " + G1.j);
gvar.showNos();
