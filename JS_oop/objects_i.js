function VehicleConstructor(name, wheels, passengers, speed){
  // the object that will eventually be returned:
  var self = this;

  var distance_traveled = 0;

  var updateDistanceTraveled = function(){
    distance_traveled += self.speed
  }

  // public vars
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengers =  passengers || 0;
  this.speed =  speed || 100;

  //public method
  this.makeNoise = function(noise){
    //noise is a private var
    var noise = noise || "beepity beep"
    console.log(noise);
  }

  this.move = function(){
    updateDistanceTraveled();
    this.makeNoise();
    return this;
  }

  this.checkMiles = function(){
    console.log(`You have traveled ${distance_traveled} miles` );
    return self;
  }

  if (!(this instanceof VehicleConstructor)) {
   // the constructor was called without "new".
   return new VehicleConstructor(name, wheels, passengers, speed);
 }

}

var unicycle = new VehicleConstructor
console.log(unicycle.name, unicycle.wheels, unicycle.passengers, unicycle.speed);
unicycle.move().move().checkMiles()

var bike = new VehicleConstructor("bikey", 2, 1)
bike.makeNoise("brrring brrringgggg")

var sedan = new VehicleConstructor("baby beluga", 4, 5)
sedan.makeNoise("honk honk")

var bus = new VehicleConstructor("big bus", 8, 32)
bus.pickUp = function(newPassengers){
  bus.passengers += newPassengers;
  console.log(bus.passengers);
}
bus.pickUp(3)
console.log(bus.name)
