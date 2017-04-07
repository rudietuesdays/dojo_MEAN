$(document).ready(function(){
  console.log("working!");

  // var button = document.getElementById("button");
  var color = false;

  $(".button").on("click", changeColor);

  $(".button").hover(greenColor, resetColor)

  function changeColor(){
    console.log('clicked');
    if (!color || color == 'red'){
      $(this).css("background-color", "blue");
      $(this).css("color", "white")
      color = 'blue';
    }
    else{
      $(this).css("background-color", "red")
      color = 'red';
    }
  }

  function greenColor(){
    $(this).css("background-color", "green");
  }

  function resetColor(){
    if (!color) {
      $(this).css("background-color", "white");
    }
    else if (color == 'red') {
      $(this).css("background-color", "red");
    }
    else {
      $(this).css("background-color", "blue");
    }
  }

})
