const leitura = document.querySelectorAll('.leitura');
const botaoNumero = document.querySelectorAll('.numero');
const botaoIgual = document.querySelectorAll('.igual');
const botaoDecimal = document.querySelectorAll('.decimal');
const botaoLimpar = document.querySelectorAll('.limpar');
const botaoOperador = document.querySelectorAll('.operador');


let displayValor = '0';
let primeiroValor = null;
let operacaoAtual = null;
let aguardandoSegundoValor = false;



botaoNumero.forEach(botao => {
    botao.addEventListener('click', () => {
        console.log('Número clicado:', botao.textContent);
    });
});

botaoOperador.forEach(botao => {
    botao.addEventListener('click', () => {
        console.log('Operador clicado:', botao.textContent);
    });
});

botaoIgual.forEach(botao => {
    botao.addEventListener('click', () => {
        console.log('Igual cliacado', botao.textContent);
    });
});

botaoLimpar.forEach(botao => {
    botao.addEventListener('click', () => {
        console.log('Limpar cliacado', botao.textContent);
    });
});

botaoDecimal.forEach(botao => {
    botao.addEventListener('click', () => {
        console.log('Decimal cliacado');
    });
});

console.log('displayValor:', displayValor);
console.log('primeiroValor:', primeiroValor); 
console.log('operador:', operacaoAtual); 
console.log('aguardandoSegundoValor:', aguardandoSegundoValor); 



