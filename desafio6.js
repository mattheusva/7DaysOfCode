let hortifruti = []
let bebidas = []
let doces = []
let frios = []

const listaDeCompras = [hortifruti, bebidas, doces, frios]

let resposta = prompt('Deseja adicionar algum alimento na lista de compras?')
let adicionou = 0

function mostrar() {
  alert(`Lista de compras:\n hortifruti: ${hortifruti}\n bebidas: ${bebidas}\n doces: ${doces}\n frios: ${frios}`)
}

function remover() {
  let itemRemovido = prompt('Qual item você deseja remover?')
  for (let i = 0; i < listaDeCompras.length; i++) {
    let indice = listaDeCompras[i].indexOf(itemRemovido)
    if (indice != -1) {
      listaDeCompras[i].splice(indice, 1)
    }
  }
  alert('Item removido da lista')
  mostrar()
}

while (resposta == 'sim' || 'Sim') {
  verificar()
  function verificar() {
    let categoria = prompt(`Em qual categoria ela se encaixa? [hortifruti, bebidas, doces, frios]?`)
    let alimento = prompt('Qual comida você deseja adicionar?')
    categorizar()
    function categorizar() {
      if (categoria == 'hortifruti') {
        hortifruti.push(alimento)
      } else if (categoria == 'bebidas') {
        bebidas.push(alimento)
      } else if (categoria == 'doces') {
        doces.push(alimento)
      } else if (categoria == 'frios') {
        frios.push(alimento)
      }
    }
    alert('Item adicionado na lista de compras')
    adicionou++
    resposta = prompt('Deseja adicionar algum outro alimento na lista?')
  }
  if (resposta != 'sim') {
    mostrar()
    break
  } 
}

while (adicionou > 0) {
  let deletar = prompt('Deseja remover algum item da lista?')
  if (deletar == 'sim') {
    remover()
  } else {
    mostrar()
    break
  }
}
