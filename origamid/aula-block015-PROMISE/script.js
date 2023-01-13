/* const promesa = new Promise((resolve, reject) => {
    let condicao = true

    if(condicao) {
        setTimeout(() => {
            resolve({nome: 'Jaqueline', idade: 33})
            }, 2000)
    } else {
        reject(Error('Um erro'))
    }
} )



const retorno = promesa
.then(resolucao => {
    console.log(resolucao)
    resolucao.profissao = 'Programmer'
    return resolucao
}).catch(rejeitada => {
    console.log('catch');
})

console.log(retorno); */

const login = new Promise ((resolve) => {
    setTimeout(()=> {
        resolve('Usuário Logado')
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    },1500)
})

const carregouTudo = Promise.all([login, dados])

console.log(carregouTudo);