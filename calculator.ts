var gpi=3.14;
var a=100;
var b=20;
var r=3;
class Calculator
{
    
    showAdd():void
    {     
        var ans=a+b;
        console.log("Addition = " + ans);

    }

    showSub():void
    {      
         var ans1=a-b;
         console.log("Subtraction = " + ans1);
    }

    showMul():void
    {
         var ans2=a*b;
         console.log("Multiplication = " + ans2);
    }

    showDiv():void
    {
         var ans3=a/b;
         console.log("Division = " + ans3);
    }

    showAreaCircle():void
    {
        var ans4=4*gpi*(r*r);
        console.log("Area of circle = " + ans4);
    }

    showSquare():void
    {
        var ans5=r*r;
        console.log("Square of a side r is = " + ans5);
    }
}
var c=new Calculator;
c.showAdd();
c.showSub();
c.showMul();
c.showDiv();
c.showAreaCircle();
c.showSquare();