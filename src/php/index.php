<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../scss/index.css">
</head>
<body>
<div class="campo-cronometro">
    <div class="contador">
        <span class="cronometro" id="horas">00</span>
        <span class="cronometro" id="minutos">:00</span>
        <span class="cronometro" id="segundos">:00</span>
    </div>

    <div class="valor" >
       <label for="">
           <span class="label1">Insira aqui o valor da sua hora de trabalho: </span><br>
           <span class="label2">R$</span>
       <input type="number" class="campo-valor" id="valor_usuario" placeholder="Ex:15,00" value="15">
       </label>
      <br>
        
        <div>
            <span class="valor-total">Valor total por minuto</span><br>
            R$ <span id="placar">0.000</span>
        </div>
    </div>
    

    <div class="botoes">
        <span><input type="submit" class="botao-acao botao-iniciar"value="Iniciar" onclick="startTime()"></span>
        <span><input type="button" class="botao-acao botao-parar"value="Parar" onclick="stopTime()"></span>
        <span><input type="button" class="botao-acao botao-reiniciar"value="Reiniciar" onclick="resetTime()"></span>
        <span><input type="button" class="botao-acao botao-zerar"value="Zerar" onclick="zerar()"></span>
    </div>
</div>
    

   <script src="../js/index.js"></script>
</body>
</html>