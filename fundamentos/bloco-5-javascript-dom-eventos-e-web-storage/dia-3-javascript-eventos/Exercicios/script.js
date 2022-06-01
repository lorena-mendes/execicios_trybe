function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Exercício 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  
  //Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
  
  //Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
  
  //Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
  function diasDoMes () {
    let daysList = document.querySelector('#days');
    
    for (let index = 0; index < dezDaysList.length; index += 1) {
      let dia = dezDaysList[index];
      let diaLista = document.createElement('li');
      if (dia === 24 || dia === 31) {
        diaLista.className = 'day holiday';
        diaLista.innerText = dia;
        daysList.appendChild(diaLista);
      } else if (dia === 4 || dia === 11 || dia === 18) {
        diaLista.className = 'day friday';
        diaLista.innerText = dia;
        daysList.appendChild(diaLista);
      } else if (dia === 25) {
        diaLista.className = 'day holiday friday';
        diaLista.innerText = dia;
        daysList.appendChild(diaLista);
      } else {
        diaLista.className = 'day'
        diaLista.innerHTML = dia;
        daysList.appendChild(diaLista);
      }
      }
    }
    diasDoMes();

    //Exercício 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
    //Adicione a este botão a ID "btn-holiday".
    //Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

    function criaBotao (nomeBotao) {
      let recebeBotao = document.querySelector('.buttons-container');
      let novoBotao = document.createElement('button');
      let nomeBotaoId = 'btn-holiday';
      novoBotao.innerHTML = nomeBotao;
      novoBotao.id = nomeBotaoId;
      recebeBotao.appendChild(novoBotao);
    };
    criaBotao('Feriados');

    //Exercício 3.Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
    //É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

    let clickB = document.getElementById('btn-holiday');
    clickB.addEventListener("click", recebeClick);
    
    function recebeClick () {
      let feriadoCor = document.querySelectorAll('.holiday');
      for (feriado of feriadoCor) {
        if ( feriado.style.backgroundColor == 'pink') {
          feriado.style.backgroundColor = 'rgb(238,238,238)'
        } else {
          feriado.style.backgroundColor = 'pink';
        };
      };
    };

    //4.Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
    //Adicione a este botão o ID "btn-friday".
    //Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

    function sextaFeira (parametro) {
      let botao = document.createElement('button');
      botao.id = 'btn-friday';
      botao.innerHTML = parametro;
      let buttonsContainer = document.querySelector('.buttons-container');
      buttonsContainer.appendChild(botao);
    }
    sextaFeira('Sexta-feira');

    //5.Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
    //É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

    let addClick = document.getElementById('btn-friday');
    addClick.addEventListener('click', adicionaBotao);
    
    let datas = [];

    function adicionaBotao () {
      let modificaTexto = document.querySelectorAll('.friday');
      for (let index = 0; index < modificaTexto.length; index += 1) {
        if (modificaTexto[index].innerText == 'SEXTOU O/') {
          modificaTexto[index].innerText = datas.shift();
        } else {
          datas.push(modificaTexto[index].innerText)
          modificaTexto[index].innerText = 'SEXTOU O/'
        }
      }      
    }
    

  





