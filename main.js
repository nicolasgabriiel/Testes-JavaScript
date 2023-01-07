const texto = document.getElementById('inserir')
const botao = document.getElementById('adicionar')

let lista = []
let descrição = ''
texto.addEventListener('input', () => {
    descrição = texto.value
})

botao.addEventListener('click', () => {
    lista.push(descrição)
    console.log(lista)
    descrição = ''
    texto.value = ''
})
