//1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)

const a = 30;
const b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const x = 19;
const y = 35;

if (x > y) {
    console.log("x é maior que y")
} else {
    console.log("y é maior que x")
}

//3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const h = 96;
const i = 14;
const c = 37;

if (h > i && h > c) {
    console.log("h é o maior número")
 } else if (i > h && i > c) {
    console.log("i é o maior número")
 } else {
    console.log("c é o maior número")
 };

 //4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

 const valor = -34;

 if (valor > 0) {
     console.log("Positive")
 } else if (valor < 0) {
     console.log("Negative")
 } else {
     console.log("Zero")
 };

 //5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

 const m = 45;
 const n = 52;
 const p = 83;

 const somaDosAngulos = m + n + p;
 const valorDosAngulos = m > 0 && n > 0 && p>0;

 if (valorDosAngulos) {
     if (somaDosAngulos === 180) {
         console.log("true")
     } else {
         console.log("false")
     }
 } else {
    console.log("Ângulo inválido")
 };

