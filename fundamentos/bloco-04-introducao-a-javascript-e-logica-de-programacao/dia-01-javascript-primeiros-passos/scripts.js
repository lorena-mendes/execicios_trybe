//Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

const currentHour = 21;

//Crie uma variável chamada "message" que, inicialmente, é uma string vazia.

let message = "";

//Implemente condicionais para que:
//Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
//Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
//Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
//Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
//Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

if (currentHour >= 22) {
    console.log("Não deveríamos comer nada, é hora de dormir")
} else if (currentHour >=18 && currentHour <22) {
    console.log("Rango da noite, vamos jantar :D")
} else if (currentHour >=14 && currentHour <18) {
    console.log("Vamos fazer um bolo pro café da tarde?")
} else if (currentHour >11 && currentHour <14) {
    console.log("Hora do almoço!!!")
} else {
    console.log("Hmmm, cheiro de café recém passado")
}

//Agora imprima a variável message fora das suas condições.

console.log(message);

//Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

let weekDay = "quarta-feira";

//Implemente condicionais para que:
//Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
//Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
    console.log("FINALMENTE, descando merecido UwU")
}