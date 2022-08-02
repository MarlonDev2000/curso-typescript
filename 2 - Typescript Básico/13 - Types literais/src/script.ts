function mostrarTexto(
  texto: string, 
  alinhamento: 'left' | 'right' | 'center'
) {
  return `<div style="text-align: ${alinhamento}">${texto}</div>`
}

mostrarTexto('Marlon', 'left')
mostrarTexto('Marlon', 'right')
// mostrarTexto('Marlon', 'blabla') erro

///////////////////////////////////////////////////////////////////

type VerdadeiroOuFalso = true | false

function temNome(nome: string): VerdadeiroOuFalso {
  if(nome !== '') {
    return true
  } else {
    return false
  }
}

//////////////////////////////////////////////////////////////////

type Opcoes = {
  width: number,
  height: number,
}

function configurar(props: Opcoes | 'auto') {

}

configurar({width: 100, height: 200})
configurar('auto')
// configurar('automatico')
