// Global

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
  function botaoTelegram() {
    const nome = '[name="telegram"]'

    window.addEventListener('click', (evento) => {
      if (!evento.target.matches(nome)) return

      const url = 'https://t.me/joinchat/AAAAAE5Pc86dozBU9RAF3Q'
      toExternalPage(url)
    })
  }

  // iniciar
  botaoTelegram()

}())
