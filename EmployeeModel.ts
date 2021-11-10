export class Employee
{
    //empid,empname,deptNo

    // empid:number=0;
    // empname:string="";
    // deptno:number=0;

    constructor(empID:number,empName:string,deptNo:number,Gender:string)
    {
        this.empid=empID;
        this.empname=empName;
        this.deptno=deptNo;
        this.gender=Gender;
        console.log(this.empid);
        console.log(this.empname);
        console.log(this.deptno);
        console.log(this.gender);

    }

    _empid:number=0;   
    public set empid(v : number) 
    {
        this._empid = v;
    }
    
    public get empid() : number 
    {
        return this._empid; 
    }
    

    _empname:string="";   
    public set empname(v : string) 
    {
        this._empname = v;
    }
    
    public get empname() : string 
    {
        return this._empname;
    }
    
    _deptno:number=0;   
    public set deptno(v : number) {
        this._deptno = v;
    }
    
    public get deptno() : number {
        return this._deptno;
    }
    

    _gender:string="";   
    public set gender(v : string) 
    {
        this._gender = v;
    }
    
    public get gender() : string 
    {
        return this._gender;
    }
    
    
}