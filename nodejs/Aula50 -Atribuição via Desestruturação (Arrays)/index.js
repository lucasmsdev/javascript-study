// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a ];
// [a, b, c] = letras;                          TUDO ISSO É ATRIBUICAO VIA DESESTRUTURACAO



// console.log(a, b, c);
//                0  1  2  3  4  5  6  7  8
const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiroNumero, segundoNumero, ...resto] = numeros;
//... rest, ...spread
console.log(primeiroNumero, segundoNumero, resto)

//                     0          1
//                  0  1  2    0  1  2  
const numeros1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

const [lista1, lista2, lista3] = numeros1;
console.log(lista1[0]);