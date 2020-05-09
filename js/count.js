
 var counter=function(arr){
    return "there are"+arr.length+ 'elements in this array'
    };
    console.log(counter(['arfeen',"malik",12]));
   
   module.exports=counter;
   //Events Emitter

   
var events = require('events');
var eventEmitter = new events.EventEmitter();


var listner1 = function listner1() {
   console.log('listner1 executed.');
}
//Reading aND writing Files
