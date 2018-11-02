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
       <input type="number" class="campo-valor" id="valor_usuario" placeholder="Ex:15,00">
       </label>
      <br>
        
        <span id="placar"><span class="valor-total">Valor total por minuto</span> <br> R$00,00</span> 
    </div>
    

    <div class="botoes">
        <span><input type="submit" class="botao-iniciar"value="Iniciar" onclick="startTime()"></span>
        <span><input type="button" class="botao-parar"value="Parar" onclick="stopTime()"></span>
        <span><input type="button" class="botao-reiniciar"value="Reiniciar" onclick="resetTime()"></span>
    </div>
</div>
    

   <script src="../js/index.js"></script>
</body>
</html>