const cuadro = document.querySelector('#cuadro')

cuadro.addEventListener('mouseover', () => {
  cuadro.classList.add('element-active')
})

cuadro.addEventListener('mouseleave', () => {
  cuadro.classList.remove('element-active')
  cuadro.classList.add('transition')
})

console.log(Math.random())