class LDemo
{
     //default parameter
     calculateArea(r:number=1,pi:number=3.14):number 
    {
        return pi*r*r;
    }

    //single line
    print1=()=>console.log("print this")

    //multiple lines
    print=(i:number,j:number)=>
    {
        console.log("printing");
        console.log("hello");
        console.log(i);
        console.log(j);
        console.log(i+j);
    }

     //optional parameter
    showVal(n:string,n2?:string):string
    {
        return n+n2;
    }

  //anonymous function without let
     sum=function(i:number,j:number):number
    {
         return i*j;
    }

    m1():void
    {
        var num:number=1;
        for(let index = 0;index < 5; index++)
        {
            console.log(num);
            num=num+1;
        }
    }

   m2():void
   {
      /* var j:any;
       var l:any="a b c d e f";
       for(j in l)
       {
           console.log(l[j]);
       }*/

       var l:any="a b c d e f";
       var k:string;

       k=l[0];
       console.log(k);

       k=l[1];
       console.log(k);

       k=l[2];
       console.log(k);
       
       k=l[3];
       console.log(k);

       k=l[4];
       console.log(k);
       
       console.log("--------------------------")

       for(var j in l)
       {     
              k=l[j];
              console.log(k);
       }
   }

   m3():void
   {
       var arr=[10,20,30,40];
       for(var i of arr)
       {
           console.log(i);
       }
   }

   whileDemo():void
   {
    var i=1;
    while(i<5)
    {
       console.log(i);
       i=i+1;
    }
   }

   dowhileDemo():void
   {
       var i=10;
       do
       {
           console.log(i);
           i+=1;
       }while(i<=12)
   }

}


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

var d1=new LDemo();
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
d1.print(10,20);




