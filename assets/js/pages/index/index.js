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
