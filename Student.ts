import { Person } from "./Person";

//subclass
export class Student extends Person{
    qualification:string;

    constructor(fn:string,gn:string,em:string,qual:string){
        super(fn,gn,em);
        this.qualification=qual;
    }
    //method overriding:ability of the sub class to change the implmentation of inherited functionality
    ListDetails():void{
            super.ListDetails();
            console.log("Qualification="+this.qualification);       
        }
}