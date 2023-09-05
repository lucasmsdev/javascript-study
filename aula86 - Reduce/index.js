const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 74},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]


const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor; //vai somar o valor de cada indice um por um
    return acumulador;
}, 0);//o zero é o valor inicial do acumulador


const pares = numeros.reduce((acumulador, valor) =>{
    if(valor % 2 === 0){
        acumulador.push(valor)
    }
 return acumulador;
}, []);


const dobro = numeros.reduce((acumulador, valor) =>{
    acumulador.push(valor * 2);
    return acumulador;
}, []);



//Retorne a pessoa mais velha do array

const pessoaVelha = pessoas.reduce((acumulador, valor) =>{
    if (acumulador.idade > valor.idade){ 
        return acumulador;
    }
    return valor;
});
console.log(pessoaVelha)