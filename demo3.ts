var g=100;
class G1
{
    i=10;
    static j=20;

    showNos():void
    {
        var l=123;
        console.log("GLobal Variable = " +g);
       
        console.log("Local Variable = " +l);

    }
    
    
}
var gvar=new G1();
console.log("class Variable = ", gvar.i);
    console.log("Static class Variable = " + G1.j);
    gvar.showNos();

   
       
       
