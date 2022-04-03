let hortifruti = []
let bebidas = []
let doces = []
let frios = []

const listaDeCompras = ['[hortifruti, bebidas, doces, frios]']

let resposta = prompt('Deseja adicionar algum alimento na lista de compras?')

while (resposta == 'sim' || 'Sim') {
  verificar()
  function verificar() {
    let categoria = prompt(`Em qual categoria ela se encaixa? ${listaDeCompras}?`)
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

    resposta = prompt('Deseja adicionar algum outro alimento na lista?')
  }  if (resposta != 'sim') {
    alert(`Lista de compras:\n hortifruti: ${hortifruti}\n bebidas: ${bebidas}\n doces: ${doces}\n frios: ${frios}`)
    break
  } else {
    resposta = 'sim'
  }
} 
