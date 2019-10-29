// Constructor
function Chronometer() {    
    this.currentTime = 0;
    this.intervalId = '';
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval( () => {
        this.currentTime++;
        this.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    var currentTimeInMin = Math.floor(this.currentTime / 60);
    return currentTimeInMin;
};

Chronometer.prototype.setSeconds = function () {
  var currentTimeInSec = this.currentTime % 60;
  return currentTimeInSec;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    return ('0' + num).slice(-2);// returns a 0 before each number, and only keep the last 2 numbers
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());

};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
