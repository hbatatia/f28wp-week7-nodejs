var firstname = "Mohammad";
function hello(someone){
    global.console.log("Hello " + someone);
}
hello(global.firstname);
global.setTimeout(function(){
    global.console.log("done!");
}, 1000);