let numero1 = document.getElementById('numero1') as HTMLInputElement
let numero2 = document.getElementById('numero2') as HTMLInputElement
let botao = document.getElementById('calcular') as HTMLElement
let res = document.getElementById('resultado') as HTMLElement

function calcular(numero1: number,numero2: number) {
  return numero1 + numero2
}

botao.addEventListener('click', function() {
  res.innerHTML = calcular(+numero1.value, +numero2.value).toString()
})