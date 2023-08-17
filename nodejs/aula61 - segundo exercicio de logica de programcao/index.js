//Escreva uma funcao chamda ePaisagem que recebe dois argmentos, largura e altura de uma imagem (number)
//Retorne true se a imgaem estiver no modo paisagem.

function ePaisagem(largura,altura) {
    if(largura > altura) { 
        return true
    }else {
        return false
    }
  
};


console.log(ePaisagem(1080,1920))

//modo paisagem:1920x1080