const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    if(numero === 2){
        console.log("Pulei o numero 2")
        continue;
    }

    if(numero === 6) {
        console.log("Encontrei o numero 6!")
        break;
    }
    console.log(numero);
};