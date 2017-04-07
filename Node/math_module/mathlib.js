module.exports = function (){
  return {
    add: function(num1, num2) {
      // add code here
      console.log("the sum is ", num1+num2);
    },
    multiply: function(num1, num2) {
      // add code here
      console.log("the answer is ", num1*num2);
    },
    square: function(num) {
      // add code here
      console.log("the square is ", num*num);
    },
    random: function(num1, num2) {
      // add code here
      console.log("the random number is ", (Math.floor(Math.random()*num2)+1));
    }
  }
};
