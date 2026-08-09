let tools=["Selenium","Playwright","Cypress","WebDriverIO"]
 
// check if playwright exist or not
//as this is forward nav ,will use for-of loop
for(let value of tools) {
     
    //adding condition to check the playwright present of not 
    if(value==="Playwright") {
        console.log(`Playwright is supported.`);
 isDisplayed=true;
 break;
}

    else{
        console.log(`Not supported`);
    }

}

 let apiTags= "regression,smoke,api,sanity"
 let result= apiTags.split(",")

console.log(`Converted stringt into array: ${result}`);
 //check if "smoke is present" and will apply for -of loop

 for(let value of result ){
if(value==="smoke"){
    
    console.log(`smoke test will be executed`);
   // isDisplayed=true
    break;

 }
else{
    console.log(`Smoke not executed`);
    
}
}

let email="mukesh@test.com"
 // to check @ and .com if both valid then print else throw error.
  

 
 if(email.includes("@") && email.includes(".com")){
    console.log(`Email is valid`);    
 } else {
    console.log(`Invalid email`);
 
 }
