var $Dojo = (function(id){
  this.myID = document.getElementById(id);
  this.click = function(clickFx){
    this.myID.addEventListener("click", clickFx)
  }
  this.hover = function(mouseIn, mouseOut){
    this.myID.addEventListener("mouseover", mouseIn);
    this.myID.addEventListener("mouseout", mouseOut);
  }
  return this;
}())

$Dojo("someIdForSomeButton").click(function() { console.log("The button was clicked!") });
