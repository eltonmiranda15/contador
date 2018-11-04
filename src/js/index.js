let segundos = 0;
let minutos = 0;
let horas = 0; 
let time;
let time_on = 0;
let campo_valor_usuario = document.getElementById("valor_usuario");
let real_por_hora = parseFloat(campo_valor_usuario.value);
let real = 0;

// campo_valor_usuario.onchange = function () {
//     console.log('ALTEROU O VALOR');
// };

campo_valor_usuario.addEventListener('change', function (evento) {
    real_por_hora = parseFloat(evento.target.value);
});

// function converterSegundosParaHMS(s) {
//     return "HH:MM:SS";
// }

// altera o valor de segundos, horas e minutos
function alterTime() {
    document.getElementById("segundos").innerHTML = ":" + segundos; 
    segundos++;
    if (segundos < 10) { segundos = "0" + segundos }

    if (segundos == 60) {
        segundos = 0;
        minutos++;

        if (minutos < 10) { minutos = "0" + minutos }
        document.getElementById("minutos").innerHTML = ":" + minutos; 
    }

    if (minutos == 60) {
        minutos = 0;
        horas++;
        if (horas < 10) { horas = "0" + horas }
        document.getElementById("horas").innerHTML = horas; 
    }

    if (horas == 24) {
        horas = 0;
    }

    real += (real_por_hora / 60 / 60); // real por segundo
    document.getElementById("placar").innerHTML = real.toFixed(3);

    time = setTimeout(alterTime, 300); // modificar tempo para testes
}

// inicia o cronometro
function startTime() {
    if(!time_on){
        time_on = 1;
        alterTime();
    }
    campo_valor_usuario.disabled = true;
}

// para o cronometro
function stopTime() {
    clearTimeout(time); 
    time_on = 0;
}

// reinicia o cronometro
// fazer com que ao clicar no resetTime() ele apague o cronometro e inicie novamente do 0
function resetTime() {
    segundos = 0;
    minutos = 0;
    horas = 0;
    real = 0;
    
    document.getElementById("horas").innerHTML = "00";
    document.getElementById("minutos").innerHTML = ":00";
    document.getElementById("segundos").innerHTML = ":00";
    document.getElementById("placar").innerHTML = "0.000";
}

function zerar() {
    stopTime();
    resetTime();
    campo_valor_usuario.disabled = false;
}