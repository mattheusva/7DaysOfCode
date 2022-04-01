const nome = prompt('Qual seu nome?')
verifica()

function verifica() {
  let area = prompt(`Olá ${nome} Você quer aprender que área? [Front-End/Back-End]`)
  area = area.toLowerCase()
  if (area == 'frontend' || area == 'front-end') {
    prompt(`Muito bom! E você quer aprender React ou Vue?`)

  } else if (area == 'backend' || 'back-end') {
    prompt(`Back-end? Legal! E quer aprender C# ou Java?`)
  } else {
    alert('Desculpe não entendi, poderia repetir?')
    verifica()
  }
}

prompt('E depois? Você quer se especializar na sua área ou quer se tonar Fullstack?')
alert('Que bom que você já tem uma ideia para sua carreira.')

continua()

function continua() {
  let resposta = prompt('Tem mais alguma tecnologia que você gostaria de aprender? [Sim/Não]')
  resposta = resposta.toLowerCase()
  if (resposta == 'sim') {
    let tecnologia = prompt('Qual seria a tecnologia?')
    alert(`Muito bom, vejo que você optou por se especializar em ${tecnologia}.`)

    while (resposta == 'sim') {
      continua()
      if (resposta == 'não' || 'nao') {
        break
        alert(`Obrigado por participar ${nome}`) 
      }
    }

  } else if (resposta == 'não' || 'nao') {
    alert(`Obrigado por participar ${nome}`) 
  }
}

