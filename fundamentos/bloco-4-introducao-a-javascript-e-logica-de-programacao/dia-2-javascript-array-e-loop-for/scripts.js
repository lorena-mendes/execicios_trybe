let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index = 0; index < numbers.length; index += 1)
console.log(numbers[index]);

//2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}
console.log(soma);

//3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

for (let index = 0; index <numbers.length; index += 1) {
    soma += numbers[index]
}
 let mediaArit = soma / numbers.length
 console.log(mediaArit);

//4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaArit > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}

//5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;