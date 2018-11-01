let segundos = 0;
let minutos = 0;
let horas = 0; 
let time;
let time_on = 0;
// let real_por_minuto = 0.25; valor estatico
let real_por_minuto = document.getElementById("valor_usuario").value;


//altera o valor de segundos, horas e minutos
function alterTime(){
    
    document.getElementById("segundos").innerHTML = ":" + segundos; 
    segundos++;
    if(segundos < 10){segundos = "0"+segundos}

    if(segundos == 60){
        segundos = 0;
        minutos++;
        //real_por_minuto = real_por_minuto + 0.25;
        let real = real_por_minuto/60;
        if(minutos < 10){minutos = "0"+minutos}
        document.getElementById("minutos").innerHTML = ":" + minutos; 
        document.getElementById("placar").innerHTML = "R$" + real; 
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

//15 reais dividido por 60m = 0,25c por minuto,
//para cada minuto que se passar acrescenta + 0,25c

//pegar valor digitado pelo usuario, gravar ele em uma variavel 
//pegar valor e dividir por 60m = valor por minuto



//inicia o cronometro
function startTime(){
    if(!time_on){
        time_on = 1;
        alterTime();
    }
}

//para o cronometro
function stopTime(){
    clearTimeout(time); 
    time_on = 0;
}

//reinicia o cronometro
function resetTime(){
    
    //fazer com que ao clicar no resetTime() ele apague o cronometro e inicie novamente do 0

        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = ":00";
        document.getElementById("segundos").innerHTML = ":00";
        document.getElementById("placar").innerHTML = "R$00,00";
}

