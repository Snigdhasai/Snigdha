var LDemo = /** @class */ (function () {
    function LDemo() {
        //single line
        this.print1 = function () { return console.log("print this"); };
        //multiple lines
        this.print = function (i, j) {
            console.log("printing");
            console.log("hello");
            console.log(i);
            console.log(j);
            console.log(i + j);
        };
        //anonymous function without let
        this.sum = function (i, j) {
            return i * j;
        };
    }
    //default parameter
    LDemo.prototype.calculateArea = function (r, pi) {
        if (r === void 0) { r = 1; }
        if (pi === void 0) { pi = 3.14; }
        return pi * r * r;
    };
    //optional parameter
    LDemo.prototype.showVal = function (n, n2) {
        return n + n2;
    };
    LDemo.prototype.m1 = function () {
        var num = 1;
        for (var index = 0; index < 5; index++) {
            console.log(num);
            num = num + 1;
        }
    };
    LDemo.prototype.m2 = function () {
        /* var j:any;
         var l:any="a b c d e f";
         for(j in l)
         {
             console.log(l[j]);
         }*/
        var l = "a b c d e f";
        var k;
        k = l[0];
        console.log(k);
        k = l[1];
        console.log(k);
        k = l[2];
        console.log(k);
        k = l[3];
        console.log(k);
        k = l[4];
        console.log(k);
        console.log("--------------------------");
        for (var j in l) {
            k = l[j];
            console.log(k);
        }
    };
    LDemo.prototype.m3 = function () {
        var arr = [10, 20, 30, 40];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var i = arr_1[_i];
            console.log(i);
        }
    };
    LDemo.prototype.whileDemo = function () {
        var i = 1;
        while (i < 5) {
            console.log(i);
            i = i + 1;
        }
    };
    LDemo.prototype.dowhileDemo = function () {
        var i = 10;
        do {
            console.log(i);
            i += 1;
        } while (i <= 12);
    };
    return LDemo;
}());
/*var d1=new LDemo();
d1.m1();*/
/*var d2=new LDemo();
d2.m2();*/
/*var d3=new LDemo();
d3.m3();*/
/*var d4=new LDemo();
d4.whileDemo();*/
/*var d5=new LDemo();
d5.dowhileDemo();*/
var d1 = new LDemo();
/*d1.m1();
d1.m2();
d1.m3();
d1.whileDemo();
d1.dowhileDemo();*/
/*var t:number=d1.sum(10,60);
console.log(t);

//anonymous function using let
let n=function(g:number,h:number):number
{
    return g%h;
}
var r:number=n(10,3);
console.log(r);*/
/*var ar:number=d1.calculateArea(2,3);
console.log(ar);

var o:string=d1.showVal("siri");
console.log(o);
var o1:string=d1.showVal("Siri ","Bhatiya ");
console.log(o1);*/
d1.print1();
d1.print(10, 20);
