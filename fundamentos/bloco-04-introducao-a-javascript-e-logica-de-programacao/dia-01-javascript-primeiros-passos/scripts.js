//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
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

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const x = 19;
const y = 35;

if (x > y) {
    console.log("x é maior que y")
} else {
    console.log("y é maior que x")
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

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

 //Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

 const valor = -34;

 if (valor > 0) {
     console.log("Positive")
 } else if (valor < 0) {
     console.log("Negative")
 } else {
     console.log("Zero")
 };