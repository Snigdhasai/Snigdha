import { NumberSymbol } from "@angular/common";

export class customerModel
{
    constructor(cid:number,cname:string,ccity:string)
    {
        this.custid=cid;
        this.custname=cname;
        this.custcity=ccity;
        console.log(this.custid);
        console.log(this.custname);
        console.log(this.custcity);
    }

    _custid:number=0;
    public set custid(v : number) 
    {
        this._custid = v;
    }
    
    public get custid() : number 
    {
        return this._custid;
    }

    _custname:string="";  
    public set custname(v : string) 
    {
        this._custname = v;
    }
    
    public get custname() : string 
    {
        return this._custname;
    }

    _custcity:string="";  
    public set custcity(v : string) 
    {
        this._custcity = v;
    }
    
    public get custcity() : string {
        return this._custcity;
    }
      
    
}