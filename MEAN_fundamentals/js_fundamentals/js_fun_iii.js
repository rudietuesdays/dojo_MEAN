function personConstructor(name) {
  this.name = name;
  this.distance_traveled =  0;
  this.say_something = function (str){
    console.log(`${this.name} says ${str}`);
  }
  this.walk = function(){
    console.log(this.name + " is walking");
    this.distance_traveled += 3;
    return this;
  }
  this.run = function(){
    console.log(this.name + " is running");
    this.distance_traveled += 10;
    return this;
  }
  this.crawl = function(){
    console.log(this.name + " is crawling");
    this.distance_traveled += 1;
    return this;
  }
}

var me = new personConstructor("rae")
console.log(me.name)
me.say_something('hellooooo')
me.walk().run().crawl()
console.log(me.distance_traveled);

function ninjaConstructor(name, cohort){
  this.name = name;
  this.cohort = cohort;
  this.belt = "yellow";
  this.levelUp = function(){
    if (this.belt == "yellow"){
      this.belt = "red";
      console.log(`${this.name} is now a ${this.belt} belt`);
      return this;
    }
    else if (this.belt == "red") {
      this.belt = "black";
      console.log(`${this.name} is now a ${this.belt} belt`);
      return this;
    }
    else {
      console.log("You have achieved the highest honor! You can\'t level up anymore");
      return this;
    }
  }
}

var ninja = new ninjaConstructor("raeee", "databaes")
ninja.levelUp().levelUp().levelUp().levelUp()



/// instructor solution ///

var person = {
  name : "Charlie",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  },
  chewGum:function(){
    console.log("I can walk and chew gum, but I can't chew gum and walk...");
  }
}

/* This is not the only way to do this.
  Specifically: the beltArray, and the levelUp strategy.
  Notice that the function returns an object literal and to reference/update internal object pieces we call the object by name.
*/
function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}
