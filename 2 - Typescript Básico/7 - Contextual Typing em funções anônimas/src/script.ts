let names: string[] = ['marlon', 'pedro', 'heitor', 'apolo']

names.forEach((nome)=>{
  if(typeof nome === 'string') {
    console.log(nome.toUpperCase())
  } else {
    console.log(nome)
  }
})