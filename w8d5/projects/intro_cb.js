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
        cb(sum)
    }
    reader.question("Input a number to add", (num) => {
        sum += parseInt(num)
        console.log(`Partial sum:${sum}`)
    })
}