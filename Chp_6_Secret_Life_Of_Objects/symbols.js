class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  }
  
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

//SYMBOLS
let sym = Symbol("name");
Rabbit.prototype[sym] = 55;
// console.log(killerRabbit[sym])

//USING SYMBOL TO CREATE A CUSTOM ARRAY TO STRING METHOD
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
    return `${this.length} cm of something`
}

console.log([1,2].toString());
console.log([1,2][toStringSymbol]());

