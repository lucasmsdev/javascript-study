function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}


const p1 = criaPessoa('Lucas','Machado');
console.log(p1.nomeCompleto);