  export class Person{
    //data member
    fullName:string;
    gender:string;
    email:string;
  
    //constructor
    constructor(fn:string,gn:string,em:string) {
    this.fullName=fn;
    this.gender=gn;
    this.email=em;
    }

    //member function
    ListDetails():void{
    console.log("Name="+this.fullName);
    console.log("Gender="+this.gender);
    console.log("Email="+this.email);    
    }
}
/* //object creation
let p1:Person=new Person("John","male","john@gmail.com");
let p2:Person=new Person("Robert","male","robert@gmail.com");
let p3:Person=new Person("Steffy","female","steffy@gmail.com");
//array of objects
let people:Person[]=[p1,p2];
people.push(p3);
people.push(new Person("keya","female","keya@gmail.com"));

for(let p of people){
    p.ListDetails();
    console.log("_________________________________")
}  */