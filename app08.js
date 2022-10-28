//import the path module
const path=require('path');
//call parse function
let myPathObject = path.parse(__filename);
//this object can be expored
console.log(myPathObject);