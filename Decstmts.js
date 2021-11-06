var Demo1 = /** @class */ (function () {
    function Demo1() {
    }
    Demo1.prototype.decideSwitch = function () {
        var g = 'C';
        switch (g) {
            case 'A':
                console.log("Its A");
                break;
            case 'B':
                console.log("Its B");
                break;
            case 'C':
                console.log("Its C");
                break;
            default:
                console.log("Neighter A,B,C");
        }
    };
    Demo1.prototype.decide = function () {
        var i = 10;
        if (i = 10) {
            console.log("i =10");
        }
        else if (i > 10) {
            console.log("i > 10");
        }
        else {
            console.log("not defined");
        }
    };
    return Demo1;
}());
var d = new Demo1();
//d.decide();
d.decideSwitch();
