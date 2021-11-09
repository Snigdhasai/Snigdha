import { NumberSymbol } from "@angular/common";

export class productsModel
{
    constructor(pid:number,pname:string,price:number)
    {
       this.prodid=pid;
       this.prodname=pname;
       this.prodprice=price;
       console.log(this.prodid);
       console.log(this.prodname);
       console.log(this.prodprice);
    }

    
    _prodid:number=0;
    public set prodid(v : number) 
    {
        this._prodid = v;
    }
          
    public get prodid() : number 
    {
        return this._prodid;
    }

    
    _prodname:string="";
    public set prodname(v : string) 
    {
        this._prodname = v;
    }
 
    public get prodname() : string 
    {
        return this._prodname;
    }
    

    _prodprice:number=0;
    public set prodprice(v : number) 
    {
        this._prodprice = v;
    }
    
    public get prodprice() : number 
    {
        return this._prodprice;
    }
    
    
}