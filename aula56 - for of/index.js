const nome = 'Lucas Machado '
const nomes = ['lucas', 'bruno', 'mariana', 'anderson']

// for (let i in nome) {
//     console.log(nome[i])
// }

for (let valor of nome) {
    console.log(valor)
}


console.log('########')

for(let nomes2 of nomes) {
    console.log(nomes2)
}

console.log("######")

nomes.forEach(function (el){
    console.log(el)
});



// For classico - Geralmente com iteravies (arrays ou strings)
// For in - Retorna o índice ou chave (string, array)
// For of - Retorna o valor me si (iteráveis, arrays ou strings)