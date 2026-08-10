

async function errorHandling(){
try{
let response= await fetch("https://restful-booker.herokuapp.com/ping")

if(response.status==200){
    console.log("Pass");
    
}
console.log(response);

console.log(response.statusText);
}

catch(e){
    console.log(e.statusText);
    console.log(e.status);
    
}
finally{
console.log("Closing request");

}
}

errorHandling(); 





async function errorHandlingInvalidURL(){
try{
let response= await fetch("https://restful-booker.herokuapp/ping")

if(response.status==200){
    console.log("Pass");
    
}
console.log(response);

console.log(response.statusText);
}

catch(e){
    console.log(e.message);
    console.log(e.name);
    
}
finally{
console.log("Closing request");

}
}

errorHandlingInvalidURL();