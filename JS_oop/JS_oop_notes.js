// creating a function with a capital letter indicates that it is an object constructor
function NewPerson(name){
  return {
    name:name,
    sayName: function(){
     console.log(name);
    }
  }
}
var jane = NewPerson("jane");
jane.sayName();

// new and this
function Person(name){
  this.name = name;
  this.sayName = function(){
    console.log(name);
  }
}

var jimmy = new Person("Jimmy");
jimmy.sayName()
