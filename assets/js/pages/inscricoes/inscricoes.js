// Global

(function () {

  // Drag Drop
  function modalAutor() {
    const abrir = document.querySelector('img[name="autor"]')
    const __modal = document.querySelector('div.modal')
    const fechar = __modal.querySelector('img[name="fechar"]')

    abrir.addEventListener('click', () => {
      __modal.classList.add('mostrar')
    })

    fechar.addEventListener('click', () => {
      __modal.classList.remove('mostrar')
    })
  }

  // iniciar
  modalAutor()

}())
