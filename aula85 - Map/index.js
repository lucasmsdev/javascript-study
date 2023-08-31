const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const nomes = pessoas.map(obj => {
    return obj.nome;
})

const apenasIdade = pessoas.map(obj => {
    return {idade: obj.idade}
})

const comId = pessoas.map((obj, indice) =>{
    const newObj = {...obj}
    newObj.id = (indice + 1)
    return newObj;
})

console.log(nomes);
console.log(apenasIdade);
console.log(comId);