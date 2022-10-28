//import file sysyem module
const fs= require('fs');
//synchronous call (just for illustration, to be avoided)
//get file nodes in current directory
const files=fs.readdirSync('./');
console.log(files);

//asynchroous call
fs.readdir('./', function(error, listFiles){
    if(error) 
    console.log(error);
else 
    console.log(listFiles);
});