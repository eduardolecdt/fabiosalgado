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

  // Lazy Loading
  function executarPixelFacebook() {
    !function(f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function() {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    }(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    )

    fbq('init', '1558686454316661')
    fbq('track', 'PageView')
  }

  // iniciar
  executarDragDrop()
  executarLazyLoading()
  executarPixelFacebook()

}())
