function mostraHora() { 
    let data = new Date()
    return data.toLocaleTimeString ('pt-BR', {hour12:false});
}



const timer = setInterval(function() {console.log(mostraHora());}, 1000); //configura o intervalo de tempo para uma funcao ser executada

setTimeout(function(){clearInterval(timer);}, 3000)

setTimeout(function() {console.log('Olá Mundo')}, 5000)