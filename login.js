let enteredUsername = "Pranali";
let enteredPassword= "Khante";

const correctUsername="admin@email.com";
const correctPassword="admin1234";

if(enteredUsername===correctUsername && enteredPassword===correctPassword ){
    console.log("Login sucessfull");
    

} else{
    console.log("Invalid credentials");
    
}

//correct usr and correct pwd
let enteredUsername1="admin@email.com";
let enteredPassword1="admin1234";
if(enteredUsername1===correctUsername &&enteredPassword1=== correctPassword){
    console.log("Correct username and password");
    
} else {
    console.log("Invalid Credential");
    
}

//correct user incorrect pwd
let enteredUsername2="admin@email.com";
let enteredPassword2="wrongpwd";
if(enteredUsername2===correctUsername &&enteredPassword2=== correctPassword){
    console.log("Correct username and password");
    
} else {
    console.log("Invalid Credential");
}

//wrong user correct pwd
let enteredUsername3="admin";
let enteredPassword3="admin1234";
if(enteredUsername3===correctUsername &&enteredPassword3=== correctPassword){
    console.log("Correct username and password");
    
} else {
    console.log("Invalid Credential");
}

//both incorrect
let enteredUsername4="admin";
let enteredPassword4="admin";
if(enteredUsername4===correctUsername &&enteredUsername4=== correctPassword){
    console.log("Correct username and password");
    
} else {
    console.log("Invalid Credential");
}