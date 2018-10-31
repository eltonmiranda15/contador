let segundos = 0;
let minutos = 0;
let horas = 0;
let time;
let time_on = 0;

function alterTime(){
    document.getElementById("segundos").innerHTML = ":" + segundos; 
    segundos = segundos + 1; 

    if(segundos == 60){
        segundos = 0;
        for(i=0; i<60; i++){
            let min = minutos + i; 
            document.getElementById("minutos").innerHTML = ":" + min; 
        }
    }

    if(minutos == 60){
        minutos = 0;
        for(i=0; i<60; i++){
            let hr = horas + i;
            document.getElementById("horas").innerHTML = hr; 
        }
    }

    if(horas == 24){
        horas = 0;
    }
    
    time = setTimeout(alterTime, 10);
}

function startTime(){
    if(!time_on){
        time_on = 1;
        alterTime();
    }
}

function stopTime(){
    clearTimeout(time); 
    time_on = 0;
}

