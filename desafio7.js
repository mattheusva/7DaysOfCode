operacao()
function operacao() {
  const mensagem = prompt('Qual operação deseja realizar? [soma, sub, multi, div]')
  if(mensagem == 'soma') {
    let num1 = Number(prompt('Digite o primeiro número'))
    let num2 = Number(prompt('Digite o segundo número'))
    soma(num1, num2)
    
  } else if(mensagem == 'sub') {
    let num1 = Number(prompt('Digite o primeiro número'))
    let num2 = Number(prompt('Digite o segundo número'))
    subtracao(num1, num2)

  } else if(mensagem == 'multi') {
    let num1 = Number(prompt('Digite o primeiro número'))
    let num2 = Number(prompt('Digite o segundo número'))
    multiplica(num1, num2)

  } else if(mensagem == 'div') {
    let num1 = Number(prompt('Digite o primeiro número'))
    let num2 = Number(prompt('Digite o segundo número'))
    divisao(num1, num2)
  }
}

function soma(num1, num2) {
  let res = num1 + num2
  alert(`O resultado é ${res}`)
  continua()
}

function subtracao(num1, num2) {
  let res = num1 - num2
  alert(`O resultado é ${res}`)
  continua()
}

function multiplica(num1, num2) {
  let res = num1 * num2
  alert(`O resultado é ${res}`)
  continua()
}

function divisao(num1, num2) {
  let res = num1 / num2
  alert(`O resultado é ${res}`)
  continua()
}

function continua() {
  let vez = prompt('Deseja realizar outra operação? [sim/sair]')
  while(vez == 'sair') {
    break
  } if(vez == 'sim') {
    operacao()
  } 
}
