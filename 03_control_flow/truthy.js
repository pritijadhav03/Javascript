const userEmail="priti@gmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

//falsy values:
//false,0,-0,BigInt 0n,"",null,undefined,Nan

//Truthy values:
//"0",'false'," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");
// }
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

//Nullish Coaescing Operator(??):null undefined

let val1;
//val1=5??10
//val1=null??10

val1=undefined??15


console.log(val1);