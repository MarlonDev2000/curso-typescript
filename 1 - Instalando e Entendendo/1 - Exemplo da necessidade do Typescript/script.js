let numero1 = document.getElementById('numero1')
let numero2 = document.getElementById('numero2')
let botao = document.getElementById('calcular')
let res = document.getElementById('resultado')

function calcular(numero1,numero2) {
  if(typeof numero1 == 'number' && typeof numero2 == 'number') {
    return numero1 + numero2
  } else {
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)
    return numero1 + numero2
  }
}

botao.addEventListener('click', function() {
  res.innerHTML = calcular(numero1.value, numero2.value)
})