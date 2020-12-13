// links

(function () {

  // variaveis
  function toExternalPage(url) {
    const a = document.createElement('a')
    a.rel = 'noopener noreferrer nofollow'
    a.target = '_blank'
    a.href = url
    a.click()
  }

  // metodos
  function redirecionarParaWhatsapp() {
    const nome = '[name="whatsapp"]'

    window.addEventListener('click', (evento) => {
      if (!evento.target.matches(nome)) return

      const url = 'https://wa.me/5515998439215'
      toExternalPage(url)
    })
  }

  function redirecionarParaCompra() {
    const nome = '[name="comprar"]'

    window.addEventListener('click', (evento) => {
      if (!evento.target.matches(nome)) return

      const url = 'https://sun.eduzz.com/676220'
      toExternalPage(url)
    })
  }

  // iniciar
  redirecionarParaWhatsapp()
  redirecionarParaCompra()

}())
