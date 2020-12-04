// Global

(function () {

  // Drag Drop
  function executarDragDrop() {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }

  // Lazy Loading
  function executarLazyLoading() {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY + window.innerHeight + 500
      const imagens = document.querySelectorAll('img[data-src]')

      for (const imagem of imagens) {
        if (alturaPagina <= imagem.offsetTop) return

        const src = imagem.getAttribute('data-src')
        imagem.src = src
        imagem.removeAttribute('data-src')
      }
    })
  }

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

  // iniciar
  executarDragDrop()
  executarLazyLoading()
  executarLoading()

}())
