function resumo(usuario: {nome: string, idade: number}) {
  return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`
}


// Implementação da função
let usuario = {
  nome: 'Marlon',
  idade: 90
}

console.log(resumo(usuario))