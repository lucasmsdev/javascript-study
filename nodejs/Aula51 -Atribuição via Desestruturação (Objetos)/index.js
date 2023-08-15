const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Machado',
    idade : 18,
    endereco: {
        rua: 'Av Brasil',
        numero: 398
    }
};

//Atribuicao via desestruturacao
const { nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);