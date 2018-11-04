<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Teste da Função converterSegundosParaHMS</title>
  <script type="text/javascript" src="../js/testConverterSegundos.js"></script>
  <link rel="stylesheet" href="../scss/tests.css">
</head>
<body>
  <div class="container">
    <h1>Teste da Função converterSegundosParaHMS</h1>

    <div class="card">
      Percentual de Aprovação <span id="percent">(calculando...)</span>
    </div>

    <table cellspacing="0">
      <thead>
        <td>Teste</td>
        <td>Entrada</td>
        <td>Retorno esperado</td>
        <td>Retorno Atual</td>
        <td>Status</td>
      </thead>
      <tbody id="results_table"></tbody>
    </table>
  </div>

  <script type="text/javascript">
    const table = document.getElementById('results_table');
    const percent = document.getElementById('percent');
    let results = executarTeste();
    let count_ok = 0;
    for(const testId of Object.keys(results)) {
      let row = table.insertRow(-1);
      let cells = {
        teste: row.insertCell(-1),
        valor_entrada: row.insertCell(-1),
        saida_esperada: row.insertCell(-1),
        saida_atual: row.insertCell(-1),
        status_teste: row.insertCell(-1)
      };

      cells.teste.innerHTML = testId.replace('Teste_', '#');
      cells.valor_entrada.innerHTML = results[testId].valor_entrada;
      cells.saida_esperada.innerHTML = results[testId].saida_esperada;
      cells.saida_atual.innerHTML = results[testId].saida_atual || 'Sem retorno';
      cells.status_teste.innerHTML = results[testId].status_teste ? 'OK' : 'FALHOU';


      cells.valor_entrada.classList.add('acenter');
      cells.saida_esperada.classList.add('acenter');
      cells.saida_atual.classList.add('acenter');
      cells.status_teste.classList.add('acenter');
      cells.status_teste.classList.add(results[testId].status_teste ? 'success' : 'fail');
      
      if (results[testId].status_teste === true) {
        count_ok++;
      }
    }

    percent.innerHTML = ((count_ok / Object.keys(results).length) * 100).toFixed(2) + '%';

  </script>
</body>
</html>