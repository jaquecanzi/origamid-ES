function Dom(selector) {
    this.element = function() {
        return document.querySelector(selector)     
    }

    this.ativo = function(classe) {
        this.element().classList.add(classe)
    }
}

const li = new Dom('li')

li.ativo('ativo')