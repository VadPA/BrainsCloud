const textArea = document.querySelectorAll('[data-autoresize]')

textArea.forEach((item) => {
  const textAreaH = item.offsetHeight
  item.addEventListener('input', (e) => {
    const $this = e.target

    $this.style.height = textAreaH + 'px'
    $this.style.height = $this.scrollHeight + 'px'
  })
})
