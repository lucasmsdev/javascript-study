// Getters e Setters -  Maneira de proteger a sua propriedade

function Produto(nome,preco,estoque) {
    this.nome = nome;
    this.preco = preco;


    Object.defineProperty(this, 'estoque',{
         enumerable: true, //mostra a chave
         configurable: true, //pode apagar a chave ou não, reconfigurar a chave sim ou não
         get : function(){
            return estoque;
         },
         set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Erro de string')
            }
            estoque = valor;


         }
         

    })



}

function criaProduto(nome) {
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome  = valor;
        }
    }
}

// const p1 = new Produto('Camiseta', 20, 3)
// p1.estoque = 1231;
// console.log(p1.estoque)

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa'
console.log(p2.nome);