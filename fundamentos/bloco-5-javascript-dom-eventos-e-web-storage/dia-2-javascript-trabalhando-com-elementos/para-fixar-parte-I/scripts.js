// 1.Acesse o elemento elementoOndeVoceEsta.

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let elementoOndeVoceEsta2 = document.querySelector('#elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta)

// // 2.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

console.log(elementoOndeVoceEsta.parentElement);
elementoOndeVoceEsta.parentElement.style.color = "blue";

// // 3.Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Primeiro filho do filho'

// 4.Acesse o primeiroFilho a partir de pai.

let pai = document.getElementById('pai');
console.log(pai.firstElementChild);

// 5.Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

console.log(elementoOndeVoceEsta.previousElementSibling);

// 6.Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

console.log(elementoOndeVoceEsta.nextSibling);

// 7.Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(elementoOndeVoceEsta.nextElementSibling);

// 8.Agora acesse o terceiroFilho a partir de pai.

console.log(pai.firstElementChild.nextElementSibling.nextElementSibling);

