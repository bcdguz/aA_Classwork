function sum() {
  let args = [...arguments];

  let sum = 0; 
  for(let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum; 
}

function sum2(...args) {

  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

// console.log(sum2(1, 2, 3, 4)) // === 10;
// console.log(sum2(1, 2, 3, 4, 5)) //=== 15;

Function.prototype.myBind = function (context) {
  let that = this;
  
  // console.log(arguments);
  let arr = [...arguments].slice(1);
  return function() {
    console.log(this);
    let secondArr = [...arguments];
    arr = arr.concat(secondArr);
    return that.apply(context, arr);
  } 
  
}

Function.prototype.myBind2 = function (context, ...args) {
  let that = this;

  // console.log(arguments);
  let arr = [...args]
  return function (...args2) {
    // console.log(this);
    let secondArr = [...args2];
    arr = arr.concat(secondArr);
    return that.apply(context, arr);
  }

}
 


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind2(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind2(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind2(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind2(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs) {
  let nums = [];
  return function _curriedSum(num) {
    nums.push(num);
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    if (nums.length === numArgs) {
      return sum;
    } else {
      return _curriedSum;
    }
  }
}

// const sum3 = curriedSum(4);
// console.log(sum3(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) { //...way
  let that = this;
  let args = [];
  return function _curry(num) {
    args.push(num);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _curry;
    }
  }
}


Function.prototype.curry2 = function(numArgs) { //apply way
  let that = this;
  let args = [];
  return function _curry(num) {
    args.push(num);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curry;
    }
  }
}

const sumCurry = sum.curry2(3);
console.log(sumCurry(1)(2)(3));