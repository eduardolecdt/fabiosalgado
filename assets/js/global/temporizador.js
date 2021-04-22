class Temporizador {
  constructor () {
    this.dataFinal = null
    this.seletoresTemporizador = {
      dia: null,
      hora: null,
      minuto: null,
      segundo: null
    }
    this.mensagemEncerramento = {
      seletor: null,
      mensagem: null
    },
    this.botoesBloqueados = {
      seletor: null,
      classe: null
    }
  }

  // Inicializacao

  definirTemporizador (dia, hora, minuto, segundo) {
    this.seletoresTemporizador.dia = dia
    this.seletoresTemporizador.hora = hora
    this.seletoresTemporizador.minuto = minuto
    this.seletoresTemporizador.segundo = segundo
  }

  definirBotoesASeremBloqueados (seletor, classe) {
    this.botoesBloqueados.seletor = seletor
    this.botoesBloqueados.classe = classe
  }

  definirMensagemEncerramento (seletor, mensagem) {
    this.mensagemEncerramento.seletor = seletor
    this.mensagemEncerramento.mensagem = mensagem
  }

  definirDataFinal (ano, mes, dia, hora = 0, minuto = 0, segundo = 0) {
    mes -= 1
    this.dataFinal = new Date(ano, mes, dia, hora, minuto, segundo)
  }

  // Sistema

  iniciar () {
    const intervalo = setInterval(() => {
      const agora = this._retornarDataAtual()
      const dataLimite = this.dataFinal
      const tempoRestante = this._calcularTempoRestante(dataLimite, agora)

      if (tempoRestante === 0) {
        const tempoFinalizado = { dias: 0, horas: 0, minutos: 0, segundos: 0 }
        this._renderizar(tempoFinalizado)
        this._exibirMensagemErro()
        this._travarBotoes()
        clearInterval(intervalo)
        return
      }

      this._renderizar(tempoRestante)
    }, 1000)
  }

  _renderizar (tempoRestante) {
    document.querySelector(this.seletoresTemporizador.dia).innerText = tempoRestante.dias
    document.querySelector(this.seletoresTemporizador.hora).innerText = tempoRestante.horas
    document.querySelector(this.seletoresTemporizador.minuto).innerText = tempoRestante.minutos
    document.querySelector(this.seletoresTemporizador.segundo).innerText = tempoRestante.segundos
  }

  _exibirMensagemErro () {
    document.querySelector(this.mensagemEncerramento.seletor).innerText = this.mensagemEncerramento.mensagem
    document.querySelector(this.mensagemEncerramento.seletor).classList.add('finalizado')
  }

  _travarBotoes () {
    const botoes = document.querySelectorAll(this.botoesBloqueados.seletor)
    for (const botao of botoes) {
      botao.classList.add(this.botoesBloqueados.classe)
    }
  }

  // Operacoes com Data

  _retornarDataAtual () {
    return new Date()
  }

  _calcularTempoRestante (data1, data2) {
    const diferenca = data1 - data2
    if (diferenca < 0) return 0

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

    return { dias, horas, minutos, segundos }
  }
}

// ---- Inicializacao ----

(function () {
  const temporizador = new Temporizador()
  const temporizador2 = new Temporizador()

  temporizador.definirTemporizador('h3[name="dias"]', 'h3[name="horas"]', 'h3[name="minutos"]', 'h3[name="segundos"]')
  temporizador2.definirTemporizador('h3[name="dias2"]', 'h3[name="horas2"]', 'h3[name="minutos2"]', 'h3[name="segundos2"]')

  temporizador.definirMensagemEncerramento('h4[name="acabou2"]', 'O seu tempo acabou!')
  temporizador2.definirMensagemEncerramento('h4[name="acabou"]', 'O seu tempo acabou!')

  temporizador.definirDataFinal(2021, 04, 28)
  temporizador2.definirDataFinal(2021, 04, 28)

  temporizador.definirBotoesASeremBloqueados('button[name="comprar"]', 'desativado')

  temporizador.iniciar()
  temporizador2.iniciar()
}())
