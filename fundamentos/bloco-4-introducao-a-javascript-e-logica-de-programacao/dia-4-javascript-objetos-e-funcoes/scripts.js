//Para fixar - Objetos:
//1.Crie um objeto player contendo as variáveis listadas abaixo.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},
}

//2.Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

//3.Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player ['bestInTheWorld']= [2006, 2007, 2008, 2009, 2010, 2018];

//4.Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

//5.Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

//Para fixar - for/in e for/of
//1.Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for ( let index in names) {
      console.log('Olá ' + names[index]);
  };

  //2.Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let index in car) {
      console.log(index, car[index]);
  };

  //Refazendo os exercícios de 1 a 5 do dia 4.1

  //1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)

function soma(a,b) {
    return a + b;
};
function sub(a,b) {
    return a - b;
};
function multi(a,b) {
    return a * b;
};
function divi(a,b) {
    return a / b;
};
function mod(a,b) {
    return a % b;
};

//2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

function bigNumber(number1, number2) {
    if (number1 > number2) {
        return number1
    } else {
        return number2
    };
};


//3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

function maiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 >num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    };
};

//4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function resultado(numero) {
    if (numero > 0) {
        return 'Positivo';
    } else if (numero < 0) {
        return 'Negativo';
    } else {
        return 'Zero';
    };
};

//5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function triangulo(ang1, ang2, ang3) {
    let soma = ang1 + ang2 + ang3;
    let angulosPositivos = ang1 > 0 && ang2 > 0 && ang3 > 0;

    if (angulosPositivos) {
        if (soma === 180) {
            return true;
        } else {
            false;
        };
    } else {
        return 'Erro! Ângulo inválido';
    };
};