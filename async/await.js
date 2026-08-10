import {writeFile,readFile} from 'fs/promises'


// write data in txt file, read, then check if headless is found
 async function headlessSupport(){

let text="Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari."
try{
 await writeFile('Demo.txt',text,'utf-8');

let readContent= await readFile('Demo.txt','utf-8')

if(readContent.includes('headless')){
console.log("Headless support confirmed");
}

 else{
    console.log('Headless supoort missing');
 }
}
catch(error){
    console.log('Error : ', error);
    
}

 }

 headlessSupport();
 