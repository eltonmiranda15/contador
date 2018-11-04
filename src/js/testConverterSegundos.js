// substitua o corpo dessa função pela sua função
function converterSegundosParaHMS(seg) {
  // switch(seg) {
  //   case 8: return '0:00:08';
  //   case 50: return '0:00:50';
  //   case 61: return '0:01:01';
  //   case 654: return '0:10:54';
  //   case 3600: return '1:00:00';
  //   case 3661: return '1:01:01';
  //   case 36610: return '10:00:10';
  //   case 36714: return '10:01:54';
  //   case 367143: return '00'; //'101:59:03';
  // }
}

function executarTeste() {
  return {
    'Teste_1': {
      valor_entrada: '8',
      saida_esperada: '0:00:08',
      saida_atual: converterSegundosParaHMS(8),
      status_teste: converterSegundosParaHMS(8) === '0:00:08',
    },
    'Teste_2': {
      valor_entrada: '50',
      saida_esperada: '0:00:50',
      saida_atual: converterSegundosParaHMS(50),
      status_teste: converterSegundosParaHMS(50) === '0:00:50',
    },
    'Teste_3': {
      valor_entrada: '61',
      saida_esperada: '0:01:01',
      saida_atual: converterSegundosParaHMS(61),
      status_teste: converterSegundosParaHMS(61) === '0:01:01',
    },
    'Teste_4': {
      valor_entrada: '654',
      saida_esperada: '0:10:54',
      saida_atual: converterSegundosParaHMS(654),
      status_teste: converterSegundosParaHMS(654) === '0:10:54',
    },
    'Teste_5': {
      valor_entrada: '3600',
      saida_esperada: '1:00:00',
      saida_atual: converterSegundosParaHMS(3600),
      status_teste: converterSegundosParaHMS(3600) === '1:00:00',
    },
    'Teste_6': {
      valor_entrada: '3661',
      saida_esperada: '1:01:01',
      saida_atual: converterSegundosParaHMS(3661),
      status_teste: converterSegundosParaHMS(3661) === '1:01:01',
    },
    'Teste_7': {
      valor_entrada: '36610',
      saida_esperada: '10:00:10',
      saida_atual: converterSegundosParaHMS(36610),
      status_teste: converterSegundosParaHMS(36610) === '10:00:10',
    },
    'Teste_8': {
      valor_entrada: '36714',
      saida_esperada: '10:01:54',
      saida_atual: converterSegundosParaHMS(36714),
      status_teste: converterSegundosParaHMS(36714) === '10:01:54',
    },
    'Teste_9': {
      valor_entrada: '367143',
      saida_esperada: '101:59:03',
      saida_atual: converterSegundosParaHMS(367143),
      status_teste: converterSegundosParaHMS(367143) === '101:59:03',
    },
  };
}