function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

let sonia = new Pessoa('Sonia', 20)


Pessoa.prototype.andar = function() {
    return this.nome + ' andou'
}

console.log(sonia.andar())

/* Criar uma função construtora de pessoas. Deve conter nome, sobrenome e idade. */
function Pessoas(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

const andre = new Pessoas('André', ' Pereira', 21)

/* Criar UM MÉTODO NO PROTÓTIPO QUE RETORNEO NOME COMPLETO DA PESSOA */

Pessoas.prototype.nomeCompleto = function() {
    return `${this.nome + this.sobrenome}`
}

console.log(andre.nomeCompleto);


/* Liste os construtores dos dados abaixo */
const li = document.querySelector('li')
li.constructor.name //HMTLIElement
li.click.constructor // function
li.innerText.constructor // String
li.value.constructor // Number
li.hidden.constructor // Boolean
li.click() // quando já é executada não importa, só importa o retorno

//liste os construtores dos dados abaixo

li.hidden.constructor.name //NÃO É Boolean, É STRING