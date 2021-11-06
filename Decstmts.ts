class Demo1
{
    decideSwitch():void
    {
        var g:string='C';
        switch(g)
        {
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
    }
    decide():void
    {
        var i=10;
        if(i=10)
        {
            console.log("i =10");
        }

       else if(i>10)
        {
            console.log("i > 10")
        }
        else
        {
              console.log("not defined");
        }
    }
}
var d=new Demo1();
//d.decide();
d.decideSwitch();