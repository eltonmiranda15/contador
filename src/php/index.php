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
    <div class="contador">
        <span class="cronometro" id="horas">00</span>
        <span class="cronometro" id="minutos">:00</span>
        <span class="cronometro" id="segundos">:00</span>
    </div>

    <div class="valor" >
       
        <input type="number" id="valor_usuario" placeholder="Valor hora de trabalho"><br>
        <span id="placar">R$00,00</span> 
    </div>
    

    <div class="botoes">
        <span><input type="submit" value="Iniciar" onclick="startTime()"></span>
        <span><input type="button" value="Parar" onclick="stopTime()"></span>
        <span><input type="button" value="Reiniciar" onclick="resetTime()"></span>
    </div>

   <script src="../js/index.js"></script>
</body>
</html>