$(document).ready(function(){
  console.log('working');
  // test object
  var customObject = {
    name:'California, Eureka',
    onClick:function(){
      console.log("I've been clicked");
      console.log(this.name);
    }
  }

  var newObject = {
    name:"West Virginia,  Montani semper liberi"
  }

  var customObject2 = {
    name:'Alaska, Fairbanks',
    onClick:function(myParam){
      console.log("I've been clicked");
      console.log(myParam, "I've been passed by bind");
      console.log(this.name);
    }
  }

  // behavior on click
  $('button').click(customObject2.onClick.bind(customObject2, "Bind this argument!"));
  // // basic behavior on click
  // $('button').click(customObject.onClick);
  // // bind customObject.onClick to the customObject as this!
  // $('button').click(customObject.onClick.bind(customObject));
  // // bind customObject.onClick to the newObject as this!
  // $('button').click(customObject.onClick.bind(newObject));
  // // pass an additional argument and bind customObject to it!
  // $('button').click(customObject2.onClick.bind(customObject2,"Bind this argument!"));
  // // pass an additional argument to customObject2's click! and bind customObject to it!
  // $('button').click(customObject2.onClick.bind(customObject,"Bind this argument!"));

})
