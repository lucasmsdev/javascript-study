const pessoa1 = new Object();
pessoa1.nome = "Lucas";
pessoa1.sobrenome = "Machado"
pessoa1.idade = 18;
// delete pessoa1.nome;
// console.log(pessoa1.nome, pessoa1.sobrenome);

pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome.`)
}


pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(chave);
}