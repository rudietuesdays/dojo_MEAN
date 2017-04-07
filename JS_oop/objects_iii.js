function VehicleConstructor(name, wheels, passengers, speed){
  // private vars and methods
  var VINarray = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','J','K',]

  var VINnum = function(){
    var vin = ''
    for (var i = 0; i <= 10; i++){
      vin += (VINarray[Math.floor(Math.random() * VINarray.length)]);
    }
    console.log(vin);
    return vin;
  }

  this.vin = VINnum();

  // public vars
  this.distance_traveled = 0;
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengers =  passengers || 0;
  this.speed =  speed || 100;
  this.vin = VINnum();

  if (!(this instanceof VehicleConstructor)) {
   // the constructor was called without "new".
   return new VehicleConstructor(name, wheels, passengers, speed);
 }

}

//public methods

VehicleConstructor.prototype.updateDistanceTraveled = function(){
  this.distance_traveled += this.speed
}

VehicleConstructor.prototype.makeNoise = function(noise){
  //noise is a private var
  var noise = noise || "beepity beep"
  console.log(noise);
  return this;
}

VehicleConstructor.prototype.move = function(){
  this.updateDistanceTraveled();
  this.makeNoise();
  return this;
}

VehicleConstructor.prototype.checkMiles = function(){
  console.log(`You have traveled ${this.distance_traveled} miles` );
  return this;
}

VehicleConstructor.prototype.readVIN = function(){
  console.log(this.vin);
  return this;
}

var unicycle = new VehicleConstructor
console.log(unicycle.name, unicycle.wheels, unicycle.passengers, unicycle.speed);
unicycle.move().move().checkMiles().readVIN().readVIN()

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
