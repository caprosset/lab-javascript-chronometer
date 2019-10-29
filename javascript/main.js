var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitsList  = document.getElementById('splits');

function printTime(minutes, seconds) {
    if (minutes > 0) {
        this.printMinutes(minutes);
    }
    this.printSeconds(seconds);
}

function printMinutes(minutes) {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
    // first, create the li element
    newSplitLi = document.createElement('li');

    // add split time to li element
    newSplitLi.innerHTML = chronometer.twoDigitsNumber(chronometer.setMinutes()) + ' : ' + chronometer.twoDigitsNumber(chronometer.setSeconds());

     // append that li element to the ol element
     splitsList.appendChild(newSplitLi);
}



function clearSplits() {
    chronometer.currentTime = 0;
    console.log(chronometer.currentTime)
    var splitLis = document.getElementsByTagName('li');
    console.log(splitLis);

    for(var i = 0; i < splitLis.length; i++) {
        splitsList.removeChild(splitLis[i]);
    } 
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === 'START' && btnLeft.classList.contains('start') ) {
        btnLeft.innerHTML = 'STOP';
        btnLeft.classList.remove('start');
        btnLeft.classList.add('stop');
        console.log(btnLeft);
        //
        btnRight.innerHTML = 'SPLIT';
        btnRight.classList.remove('reset');
        btnRight.classList.add('split');
        console.log(btnRight);

        chronometer.startClick();
    } else if (btnLeft.innerHTML === 'STOP' && btnLeft.classList.contains('stop') ){
        btnLeft.innerHTML = 'START';
        btnLeft.classList.remove('stop');
        btnLeft.classList.add('start');
        console.log(btnLeft);
        // 
        if(btnRight.innerHTML === 'SPLIT' && btnRight.classList.contains('split') ) {
            btnRight.innerHTML = 'RESET';
            btnRight.classList.remove('split');
            btnRight.classList.add('reset');
            console.log(btnRight);
        }
        chronometer.stopClick();
    }
});


// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML === 'RESET') {
        if(btnLeft.innerHTML !== 'START') {
            btnRight.innerHTML = 'SPLIT';
            btnRight.classList.remove('reset');
            btnRight.classList.add('split');
            console.log(btnRight);
        } else {
            clearSplits();
        }
    } else if (btnRight.innerHTML === 'SPLIT')  {
        if(btnLeft.innerHTML !== 'STOP') {
            btnRight.innerHTML = 'RESET';
            btnRight.classList.remove('split');
            btnRight.classList.add('reset');
            console.log(btnRight);
        } else {
            printSplit();
        }
    }
});
