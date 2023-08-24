function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12:false
    });
} 

try {
    // É executada quando não há erros
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)

} catch(e) {
    // É executada quando há erros
    console.log(e)
} finally {
    // É executada sempre
    console.log('Tenha um bom dia!')
}





