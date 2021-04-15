
/* //function defination
function greet(name:string="seed"):void{
    console.log("Welcome "+name);
}

//function call
greet("Jack");
greet("Jill");
greet(); */


/* 
 //optional parameter
function printTotal(marks:number[],grace?:number){
    let total:number=0;
    for (let m of marks){
        total+=m;
    }
    if(grace==undefined){
        console.log("Total without grace="+total);
    }
    else{
        console.log("Total with grace="+(total+grace));
    }
}
printTotal([50,50,50]);
printTotal([50,50,50],20);

 */

function f1(){
    console.log("1");
}
function f2(){
    console.log("2");
}
//calling another function from a function
function f3(){
    f1();
    f2();    
}
f3();  