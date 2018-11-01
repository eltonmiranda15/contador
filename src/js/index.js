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
        minutos++;
        if(minutos < 10){minutos = "0"+minutos}
        document.getElementById("minutos").innerHTML = ":" + minutos; 
    
    }

    if(minutos == 60){
        minutos = 0;
        horas++;
        if(horas < 10){horas = "0"+horas}
        document.getElementById("horas").innerHTML = horas; 
    }

    if(horas == 24){
        horas = 0;
    }
    
    time = setTimeout(alterTime, 1); //modificar tempo para testes
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

function resetTime(){
    document.getElementById("horas").innerHTML = "00";
    document.getElementById("minutos").innerHTML = ":00";
    document.getElementById("segundos").innerHTML = ":00";

}

