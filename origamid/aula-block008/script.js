/* Transformar o objeto em uma constructor function */

/* const pessoa = {
    nome:'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + 'andou')
    }
}

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function() {
        console.log(nome + ' andou')
    }
}

let andre = new Pessoa('André',20)
let maria = new Pessoa('Maria', 15)

console.log(maria); */

/* Crie um constructor function p manipulação de listas de elementos do dom. Deve conter os seguintes propriedades e métodos:
    elements, retorna NodeList com os elementos selecionados
    addClass(classe), adiciona a classe a todos os elementos
    removeClass(classe), remove a classe a todos os elementos
*/

function Dom(seletor) {
    const elementsList = document.querySelectorAll(seletor) /*Errei por não fazer a função com forEach */
    this.elements = elementsList
    this.adicionar = function(classe) {
         elementsList.forEach((e) => {
            e.classList.add(classe)
         })
    }
    this.remover = function(classe) {
         elements.classList.remove(classe)
    }

}

let i = new Dom('p')
console.log(i)
i.adicionar('ativar')