export class Student
{
    //stuid,stuname,stucity
    constructor(stuID:number,stuName:string,stuCity:string)
    {
       this.stuid=stuID;
       this.stuname=stuName;
       this.stucity=stuCity;
       console.log(this.stuid);
       console.log(this.stuname);
       console.log(this.stucity);
    }

    _stuid:number=0;
    public set stuid (v : number) 
    {
        this._stuid = v;
    }
    
    public get stuid() : number 
    {
        return this._stuid
    }
    

    _stuname:string="";
    public set stuname(v : string) 
    {
        this._stuname = v;
    }
    
    public get stuname() : string {
        return this._stuname; 
    }
    
    _stucity:string="";
    public set stucity(v : string) {
        this._stucity = v;
    }
    
    public get stucity() : string {
        return this._stucity;
    }
    
    

}