const texto = document.getElementById('inserir')
const botao = document.getElementById('adicionar')
const elementos = document.getElementById('elementos')

let lista = []
let descrição = ''
texto.addEventListener('input', () => {
    descrição = texto.value
})

botao.addEventListener('click', () => {
    lista.push(descrição)
    console.log(lista)
    chamarLista()
    descrição = ''
    texto.value = ''
})

function chamarLista (){
for(let i = 0; i < lista.length; i++){
    elementos.innerHTML = `<li>${lista[i]}</li>`
}
}

// Declaração de uma variável
let nome = "João";
console.log("Olá " + nome + "!");

// Declaração de uma função
function dobrar(numero) {
  return numero * 2;
}

// Chamada da função
let resultado = dobrar(5);
console.log(resultado);