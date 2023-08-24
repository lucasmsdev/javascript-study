//escreva uma funcao onde voce tera 2 numeros e tera que pegar apenas o maior

//abaixo tem varias formas de fazer a mesma coisa porem os menores fomos fatorando

function max(num1,num2) {
    if(num1 > num2){
        console.log(`O ${num1} é o número maior!`)
    }else {
        console.log(`O ${num2} é o número maior!`)
    }

};


function max1(x,y) {
    // if (x > y) return x;
    // return y;

    return x > y ? x : y;
}

const max2 = (x,y) => {
    return x > y ? x : y;
}

const max3 = (x,y) =>  x > y ? x : y;

console.log(max(1,2));

console.log(max2(100,20));