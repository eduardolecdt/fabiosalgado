// Global

(function () {

  // Loading
  function executarLoading() {
    const __body = document.body
    const __divLoading = document.querySelector('div[name="loading"]')

    window.addEventListener('load', () => {
      setTimeout(() => {
        __body.classList.remove('carregando')
        __divLoading.classList.add('ocultar')
      }, 1000)
    })
  }

  // Slide Conteudo
  function executarSlideConteudo() {
    const __avancarSlide = document.querySelector('img[name="avancar_slide_conteudo"]')
    const __voltarSlide = document.querySelector('img[name="voltar_slide_conteudo"]')
    const __slide = document.querySelector('div[name="slide_conteudo"]')
    const numeroLinks = __slide.children.length
    let __indice = 1

    __avancarSlide.addEventListener('click', () => {
      if (__indice === numeroLinks) return
      __indice++
      const porcentagem = 330 * (__indice - 1)
      __slide.style.transform = `translateX(-${porcentagem}px)`
    })

    __voltarSlide.addEventListener('click', () => {
      if (__indice === 1) return
      __indice--
      const porcentagem = 330 * (__indice - 1)
      __slide.style.transform = `translateX(-${porcentagem}px)`
    })
  }

  // iniciar
  executarLoading()
  executarSlideConteudo()

}())
