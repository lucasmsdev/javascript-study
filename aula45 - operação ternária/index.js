// (condicao)  'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario = 100 ? 'Usuario vip' : 'Usuario normal'; 

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'


console.log(nivelUsuario,"E sua cor é",corPadrao)

// if (pontuacaoUsuario >= 100 ){
//     console.log('Usuario vip')
// } else {
//     console.log('Usuario normal')
// }
