let idade: string | number = 90;
idade = "Marlon"

function mostrarIdade(idade: string | number) {
  if(typeof idade === 'string') {
    console.log(`Minha idade é: ${idade.toUpperCase()}`)
  } else {
    console.log(`Minha idade é: ${idade}`)
  }
}

mostrarIdade(90)
mostrarIdade('90')
