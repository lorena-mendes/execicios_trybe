//8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
const x = 3;
const y = 5;
const z = 1;

if ((x % 2 === 0 || y % 2 === 0 || z % 2 === 0)) {
    console.log("true")
} else {
    console.log("false")
};

//9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const a = 8;
const b = 10;
const c = 12;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
    console.log("true")
} else {
    console.log("false")
};

//10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custoProduto = 0;
const valorVenda = 50;

if (custoProduto >= 0 && valorVenda >= 0) {
    const custoTotal = custoProduto * 1.2;
    const lucro = (valorVenda - custoTotal)
    console.log(lucro)
} else {
    console.log("Erro!! Valor inválido");
}
