class Clock {
    constructor() {
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        if (this.seconds === 59){
            this.seconds = 0;
            this.minutes += 1;
        }else{
            this.seconds += 1;
        };
        if (this.minutes === 59) {
            this.minutes = 0;
            this.hours += 1;
        };
        
        this.printTime();
    }
}

// const clock = new Clock();

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addNumbers(sum, numsLeft, cb){
    if (numsLeft === 0){
        cb(sum);
        reader.close();
        return;
    }
    reader.question("Input a number to add: ", (num) => {
        sum += parseInt(num);
        console.log(`Partial sum:${sum}`);
        addNumbers(sum, numsLeft - 1, cb);
    })
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function absurdBubbleSort(arr, sortcb) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortcb(arr);
        }
    }

    outerBubbleSortLoop(true);
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });



function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} > ${el2}`, (input) => {
        if (input === 'yes') {
            callback(true);
        } else {
            callback(false);
        }
    })
    // reader.close();
}

// askIfGreaterThan(3, 4, (ele) => {
//     console.log(ele)
// })

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length-1){
        askIfGreaterThan(arr[i], arr[i+1],(isGreaterThan) => {
            if (isGreaterThan){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                innerBubbleSortLoop(arr, i + 1, true, outerBubbleSortLoop);
            }else {
                innerBubbleSortLoop(arr, i + 1, false, outerBubbleSortLoop);
            }
        })
    }else if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
    }
}

// innerBubbleSortLoop([1,7,5], 0, false, () => {console.log("In outer bubble sort")})

Function.prototype.myBind = function(context) {
    return () => {
        this.apply(context);
    }
}

class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name); //this is the window (no .name)
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

Function.prototype.myThrottle = function (interval){
    let tooSoon = false;
    return () => {
        if (!tooSoon){
            tooSoon = true;
            setTimeout(()=> { tooSoon = false}, interval);
            this();
        }
    }
};


class Neuron {
    fire() {
        console.log("Firing!");
    }
}

const neuron = new Neuron();

// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);


// clearInterval(interval);


// neuron.fire = neuron.fire.myThrottle(1000);

// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);


// class Neuron {
//     constructor() {
//         this.fire = this.fire.myThrottle(500);
//     }

//     fire() {
//         console.log("Firing!");
//     }
// }


Function.prototype.myDebounce = function(interval) {
    //declare timeout
    let timeout;
    let currentFunction = this;
    return function() {
        let fncall = function() {
            //timeout var set to null
            timeout = null;
            //invoke original function
            currentFunction();
        }
        //timeout = setTimeout(fncall, interval)
        timeout = setTimeout(fncall, interval);
    }
}

class SearchBar {
    constructor() {
        this.query = "";

        this.type = this.type.bind(this);
        this.search = this.search.bind(this);
    }

    type(letter) {
        this.query += letter;
        this.search();
    }

    search() {
        console.log(`searching for ${this.query}`);
    }
}

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
    searchBar.type("h");
    searchBar.type("e");
    searchBar.type("l");
    searchBar.type("l");
    searchBar.type("o");
    searchBar.type(" ");
    searchBar.type("w");
    searchBar.type("o");
    searchBar.type("r");
    searchBar.type("l");
    searchBar.type("d");
};

searchBar.search = searchBar.search.myDebounce(500);

queryForHelloWorld();