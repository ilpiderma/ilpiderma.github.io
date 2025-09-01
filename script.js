let players = [];
let currentMode = '';
let currentRound = 0;
let currentPlayerIndex = 0;
let selectedAnswers = [];
let currentQuestion = '';

const questionCards = {
  black: [
    "Camminavamo nella foresta e abbiamo scoperto ____, come per magia",
    "Sinceramente,____ in realtà virtuale,deve essere eccezzionale",
    "Abbiamo litigato perché lei voleva _____",
    "Vivo per lei perchè mi da _____",
    "L'ultimo video che ho visto su Po**hub era intitolato ____, Mi ha incuriosito troppo",
    "Più che il matrimonio stesso, ciò che ha rafforzato la nostra unione è____",
    "Tre cose che tirano su il morale sono il cioccolato, il Sole e____",
    "L invenzione più inutile di sempre è____",
    "Se fossi un supereroe, il tuo superpotere sarebbe____",
    "La peggior scusa per non andare a lavoro è____",
    "L ingrediente segreto del successo è____",
    "L ultima cosa che vorresti trovare nel tuo piatto è____",
    "Il peggior regalo di compleanno mai ricevuto è____",
    "La cosa più assurda che potresti fare durante un matrimonio è____",
    "La cosa più strana che hai trovato nella borsa di tua madre è____",
    "Il miglior modo per rovinare una festa è____",
    "La frase più stupida da scrivere su un biglietto d’auguri è____",
    "Il peggior modo per chiedere scusa è____",
    "La cosa più strana che potresti trovare sotto il letto è____",
    "La cosa più imbarazzante da urlare in pubblico è____",


  ],
  teen: [
    "Il momento più buffo in cui ho riso è _____.",
    "Una figuraccia epica combinata con _____.",
    "Se non sai _____, vuol dire che non hai il mindset vincente",
 

  ]
};

const responseCards = {
  black: [
    "Imitare Hitler in versione hot",
    "Mandare foto nudo a sconosciuti",
    "La fede in Dio",
    "La parola magica per farsi fare un po****o",
    "il complesso di Edipo",
    "Il discorso del Duce",
    "Soffocarla con un cuscino",
    "Suonare la sigla di titanic con un flauto infilato nel culo",
    "Andare a trovare i malati di leucemia",
    "Il pollice sul cli*****e",
    "Iniettare la candeggina in vena per contrastare il covid",
    "Comprare follower su instagram per scroccare cene e alberghi",
    "I capezzoli a forma di cuore",
    "Produrre metanfetamine in mezzo al deserto",
    "Un fidanzato camorrista",
    "La sorella gemella",
    "Un Pe*e enorme",
    "I campi di lavoro in cina",
    "Una Bella sculacciata",
    "Se**o nei bagli dell'autogrill",
    "Lo scontrino lungo 5 metri",
    "La password dimenticata di Netflix",
    "La bolletta della luce di dicembre",
    "7 anni senza se**o",
    "Il ragù della nonna",
    "Trovare la frequenza radio dei baby-phones del quartiere",
    "Il botox",
    "Il vicino di casa molesto",
    "Il fantasma di zio Giovanni",
    "Una gita con i parenti indesiderati",
    "Il frigorifero vuoto",
    "Leccare piedi in stile Peppe Fetish",
    "Org**mi multipli",
    "La guida definitiva al kamasutra",
    "Mandare nudes al gruppo sbagliato",
    "Ubriacarsi fino a sparire",
    "Il vibratore dimenticato in valigia",
    "Fumare in bagno a scuola",
    "un org*a gay",
    "Un threesome finito male",
    "sexting con il professore",
    "Essere scoperti con il dildo in mano",
    "Il tatuaggio fatto da ubriaco",
    "il mostro di firenze",
    "flexare la collezione di carte Pokemon",
    "un rito per evocare Satana",
    "Bossetti innocente", 
    "una bella milf",
    "ubriacarsi e svegliarsi in un altro paese",
    "La fila infinita all’ufficio postale",
    "una mina di prossimità",
    "il piano per conquistare la Polonia",

  ],
  teen: [
    "cadere dalle scale davanti a tutti",
    "ridere senza motivo in pubblico",
    "cantare sotto la doccia fingendo di essere una popstar",
    "confondere il nome dei professori",
    "mandare messaggi sbagliati al gruppo"
  ]
};

// ----------------- FUNZIONI -----------------

function selectMode(mode) {
  currentMode = mode;
  document.getElementById('playerSetup').classList.remove('hidden');
}

function createPlayerInputs() {
  const numPlayers = parseInt(document.getElementById('numPlayersInput').value);
  if (isNaN(numPlayers) || numPlayers < 2) {
    alert("Inserisci almeno 2 giocatori!");
    return;
  }
  const inputsDiv = document.getElementById('playerInputs');
  inputsDiv.innerHTML = '';
  for (let i = 0; i < numPlayers; i++) {
    const input = document.createElement('input');
    input.classList.add('playerName');
    input.placeholder = `Nome giocatore ${i + 1}`;
    inputsDiv.appendChild(input);
  }
  document.getElementById('startGameBtn').classList.remove('hidden');
}

function startGame() {
  const inputElements = document.querySelectorAll('.playerName');
  players = [];
  inputElements.forEach(inp => {
    if (inp.value.trim() !== '') players.push(inp.value.trim());
  });
  if (players.length < 2) {
    alert("Inserisci almeno 2 giocatori!");
    return;
  }
  document.getElementById('modeSelection').classList.add('hidden');
  currentRound = 0;
  startRoundScreen();
}

function startRoundScreen() {
  document.getElementById('roundScreen').classList.remove('hidden');
  currentQuestion = questionCards[currentMode][Math.floor(Math.random() * questionCards[currentMode].length)];
  document.getElementById('currentQuestion').innerText = currentQuestion;
}

function startTurn() {
  document.getElementById('roundScreen').classList.add('hidden');
  currentPlayerIndex = 0;
  selectedAnswers = [];
  showPlayerTurn();
}

function showPlayerTurn() {
  document.getElementById('playerTurn').classList.remove('hidden');
  document.getElementById('playerName').innerText = `Turno di: ${players[currentPlayerIndex]}`;
  document.getElementById('seeHandBtn').classList.remove('hidden');
  document.getElementById('playerCards').classList.add('hidden');
  document.getElementById('playerCards').innerHTML = '';
}

function seeHand() {
  const cardsDiv = document.getElementById('playerCards');
  cardsDiv.innerHTML = '';
  const hand = [];
  for (let i = 0; i < 5; i++) {
    const card = responseCards[currentMode][Math.floor(Math.random() * responseCards[currentMode].length)];
    hand.push(card);
  }

  hand.forEach(card => {
    const btn = document.createElement('button');
    btn.innerText = card;
    btn.onclick = () => selectCard(card);
    cardsDiv.appendChild(btn);
  });

  document.getElementById('seeHandBtn').classList.add('hidden');
  cardsDiv.classList.remove('hidden');
}

function selectCard(card) {
  selectedAnswers.push(card);
  currentPlayerIndex++;
  if (currentPlayerIndex >= players.length) {
    document.getElementById('playerTurn').classList.add('hidden');
    showSummary();
  } else {
    showPlayerTurn();
  }
}

function showSummary() {
  document.getElementById('summaryScreen').classList.remove('hidden');
  document.getElementById('summaryQuestion').innerText = `Domanda: ${currentQuestion}`;

  // Mescola solo le carte scelte
  const shuffled = selectedAnswers.sort(() => Math.random() - 0.5);
  const div = document.getElementById('summaryAnswers');
  div.innerHTML = '';
  shuffled.forEach((ans, i) => {
    const p = document.createElement('p');
    p.innerText = `Risposta ${i + 1}: ${ans}`;
    div.appendChild(p);
  });
}

function restartGame() {
  location.reload();
}
