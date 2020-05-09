
var time=0;
var timer=setInterval(function (){
time +=2;
    console.log(time+"Seconds have passed");
    if(time >5){
        clearInterval(timer);
    }



},2000)

//normal functions
function sayHI(){
    console.log("sayHi");
}
sayHI();
//function expressions
var sayBye=function(){
    console.log("saybye");
}
sayBye();

//Modules
var counter= require('./count')
console.log(counter(['arfeen',"malik",12]));

   







































































