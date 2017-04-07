function DeckConstructor(){

  // if the constructor was called without "new"
  if (!(this instanceof DeckConstructor)) {
   return new VehicleConstructor(name, wheels, passengers, speed);
  }

  //private vars
  this.deck = [];
  var suits = {
      clubs: '\u2667',
      hearts: '\u2661',
      spades: '\u2664',
      diamonds: '\u2662'
    }
  var values = {
    1: "A",
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: "J",
    12: "Q",
    13: "K"
  }

  //create 1 of each card
  for (var suit in suits){ //
    var suit = suits[suit];
    for (value in values){
      var card = [values[value], suit]
      this.deck.push(card);
    }
  }

  // OR... Nested for loops iterate over suits and values to create new cards
  // suits.forEach(function(suit){
  //   values.forEach(function(value){
  //     self.deck.push(new Card(value, suit));
  //   });
  // });

  // console.log(this.deck);
}

// OR.... call this.buildDeck inside the constructor:
// Deck.prototype.buildDeck = function(){
//   var suits = ['diamonds', 'clubs', 'hearts', 'spades'],
//       values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'],
//       // Capture snapshot of this for use in callback function
//       self = this;
//
//   // Set up cards in deck as empty array
//   this.cards = [];
//   // Nested for loops iterate over suits and values to create new cards
//   suits.forEach(function(suit){
//     values.forEach(function(value){
//       self.cards.push(new Card(value, suit));
//     });
//   });
//   return this;
// }

DeckConstructor.prototype.shuffle = function(){
  var m = this.deck.length, t, i;

  // while elements remain to be shuffled
  while(m){
    // pick a remaining element
    i = Math.floor(Math.random() * m--);

    // swap that element with the current element
    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }
  // console.log(this.deck);
  return this;
}

DeckConstructor.prototype.reset = function(){
  return new DeckConstructor; // with this method, could also do  this.buildDeck().shuffle();
}

DeckConstructor.prototype.deal = function(){
  // var card = this.deck.pop();
  // console.log('******');
  // console.log(card);
  // console.log('******');
  // console.log(this.deck);
  return (this.deck.length > 0) ? this.deck.pop() : null;
}

// use this with new Card on line 63
// function Card(value, suit){
//   this.value = value;
//   this.suit = suit;
// }

deck1 = new DeckConstructor
deck1.shuffle()//.reset()
// deck1.shuffle().deal()

function PlayerConstructor(name){
  this.name = name;
  this.hand = [];
}

PlayerConstructor.prototype.hit = function(deck){
  this.hand.push(deck.deal());
  console.log(this.hand);
  return this;
}

PlayerConstructor.prototype.discard = function(card){
  var hand = this.hand;
  for (var i = 0; i < this.hand.length; i++){
    if (hand[i] == card){
      return hand[i];
    }
  }
  this.hand.splice(hand[i], 1)
}

player1 = new PlayerConstructor
player1.hit(deck1).hit(deck1)
