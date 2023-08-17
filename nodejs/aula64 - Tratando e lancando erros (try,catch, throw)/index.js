// //tratando erros (porem nao exiba o erro pro usuario final)


// try{
//     console.log(naoExisto);
// }catch(err) {
//     console.log('naoExisto não existe')
//     console.log(err);
// }

function soma(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser numeros!')
    }

    return x+y;
    
}