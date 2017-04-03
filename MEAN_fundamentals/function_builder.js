function runningLogger(){
  console.log("I am running!");
}

function multiplyByTen(num){
  result =  num * 10;
  return result;
  // OR
  // if (typeof(num) == 'number'){
  //   return num * 10
  // }
}
// console.log(multiplyByTen(5))

var stringReturnOne =  function(){
  return "1) This is the first hard-coded string"
}
var stringReturnTwo =  function(){
  return "2) This is the second hard-coded string"
}
// console.log(stringReturnOne(), stringReturnTwo());

function caller(parameter){
  if (typeof(parameter) == 'function' ){
    parameter()
  }
}
// caller(runningLogger)

function myDoubleConsoleLog(para1, para2){
  if (typeof(para1) == 'function' && typeof(para2) == 'function') {
    console.log(para1(), para2());
  }
  else if (typeof(para1) == 'function') {
    console.log(para1());
  }
  else if (typeof(para2) == 'function') {
    console.log(para2());
  }
  else {
    return;
  }
}
// myDoubleConsoleLog(5, stringReturnTwo)

function caller2(parameter){
  console.log("starting");
  if (typeof(parameter) == 'function'){
      setTimeout(parameter, 2000);
  }
  // OR...
  // var x = setTimeout(
  //   function(){
  //     if (typeof(param)=='function'){
  //       // notice the passed parameters...
  //       param(stringReturnOne, stringReturnTwo);
  //     }
  //   }, 2000);
  console.log("ending?");
  return "interesting";
}
console.log(caller2(myDoubleConsoleLog))
