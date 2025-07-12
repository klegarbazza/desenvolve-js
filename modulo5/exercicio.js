function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const futuro = new Date(dataFutura);
    const diferenca = futuro - agora;
  
    if (diferenca <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
      };
    }
  
    const segundos = Math.floor((diferenca / 1000) % 60);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  
    return { dias, horas, minutos, segundos };
  }
  
  function atualizarTemporizador() {
    const tempo = calcularTempoRestante("2025-12-31T23:59:59");
  
    console.log(
      `Faltam ${tempo.dias} dias, ${tempo.horas} horas, ${tempo.minutos} minutos e ${tempo.segundos} segundos.`
    );
  }
  
  setInterval(atualizarTemporizador, 1000);  