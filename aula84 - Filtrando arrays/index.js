//Filter, map, reduce

// Retorne os numeros maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// function callbackFilter(valor, indice, array){
//     return valor > 10
// }
// const numerosFitler = numeros.filter((valor, indice, array) => {
//     return valor > 10;
// })
// console.log(numerosFitler);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const pessoasMaisDeCincoLetras = pessoas.filter((obj) =>{
    return obj.nome.length >= 5;
})

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => {return obj.idade > 50;})

const nomeTerminaComA = pessoas.filter(obj => {return obj.nome.toLowerCase().endsWith('a')});

console.log(pessoasMaisDeCincoLetras);
console.log(pessoasComMaisDeCinquentaAnos);
console.log(nomeTerminaComA)