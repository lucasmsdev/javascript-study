// defineProperty - defineProperties 

function Produto(nome,preco,estoque) {
    this.nome = nome;
    this.preco = preco;


    Object.defineProperty(this, 'estoque',{
         enumerable: true, //mostra a chave
         value: estoque, //valor da chave
         writable: false, //pode ou não alterar o valor
         configurable: true, //pode apagar a chave ou não, reconfigurar a chave sim ou não

    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: estoque, 
            writable: false, 
            configurable: true, 
        },
        preco: {
            enumerable: true, 
            value: estoque, 
            writable: false, 
            configurable: true, 
        }
    })

}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))

for(let key in p1) {
    console.log(key);
}