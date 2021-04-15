import { Student } from "./Student";
import { Person } from "./Person";


//create an array of objects
let s1:Student=new Student("Sasha","female","sasha@gmail.com","BE");
let s2:Student=new Student("Masha","female","masha@gmail.com","ME");

let studarr:Person[]=[s1,s2];
studarr.push(new Student("Asha","female","asha@gmail.com","MTech"));

for(let s of studarr){
    s.ListDetails();
    console.log("_________________________________");
}