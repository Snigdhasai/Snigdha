class User{
    m1():void{
    var str='100';
   // var str1:number=<number><any>str;
    var str1:any=str;
    //console.log(str1);
    console.log(typeof(str1));
    
    str1=1000;
    console.log(str1);

    var s1=10;
    var s2:any=s1;
    s1=555.555;
    s2='hello';
    s2=2323;
    }
}

var u=new User();
u.m1();
