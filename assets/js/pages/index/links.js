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

      const url = 'https://wa.me/5593999540115'
      toExternalPage(url)
    })
  }

  function redirecionarParaCompra() {
    const nome = '[name="comprar"]'

    window.addEventListener('click', (evento) => {
      if (!evento.target.matches(nome)) return

      const url = 'https://hotmart.com'
      toExternalPage(url)
    })
  }

  // iniciar
  redirecionarParaWhatsapp()
  redirecionarParaCompra()

}())
