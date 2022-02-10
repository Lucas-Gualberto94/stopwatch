var seg = 00;
var min = 00;
var hr = 00;

var stopwatch;

function start(){
    clearInterval(stopwatch);
    stopwatch = setInterval (timer, 1000);
}

function pause() {
    clearInterval(stopwatch);
}

function reset() {
    clearInterval(stopwatch);
    seg = 0;
    min = 0;
    hr = 0;

    document.getElementById('counter').innerHTML = '00:00:00';
}

function timer() {  //função para quando o contador for inciado
    seg++
    
    if(seg == 60) {
        min++;
        seg = 0;        
    }

    if(min == 60) {
        hr++;
        min = 0;
    }
    
    var format = (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg); 
    document.getElementById('counter').innerText = format;
     
}
