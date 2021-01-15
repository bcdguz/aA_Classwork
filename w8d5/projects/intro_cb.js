class Clock {
    constructor() {
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(this._tick, 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        this.seconds += 1;
        this.printTime();
    }
}

const clock = new Clock();