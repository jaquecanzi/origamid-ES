const doc = fetch('./doc.txt')

console.log(doc);

doc
.then(r => r.text())
.then(body => {
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerText = body
})