function fib() {
  // Some variables here
  var prev = 0;
  var next = 1;
  function nacci() {
    // do something to those variables here
    console.log(next);
    var temp = prev;
    prev = next;
    next = next + temp;
  }
  return nacci;
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"

/*

0 1 1 2 3 5 8

0 + 1 = 1
1 + 1 = 2

*/
