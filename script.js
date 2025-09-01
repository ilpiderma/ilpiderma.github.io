let players = [];
let currentMode = 'black';
let currentRound = 0;
let currentPlayerIndex = 0;
let selectedAnswers = [];
let currentQuestion = '';
let availableCards = [];

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
    "_____ non è tradire",
    "______ fa venire in mente bei ricordi",
    "Ti racconto come ho inconctrato tuo padre,tutto è cominciato con ____",
    "le ho scritto un poema d'amore, il titolo è _____",
    "_____ rinforza il nostro amore",
    "_____, era sicuramente il nostro unico punto in comune quando ci siamo conosciuti",
    "_____ a che punto accade de la bella addormentata?",
    "ho comprato una mistery box, dentro c'era _____",
    "Challenge! chi rimane per ultimo vince _____",
    "prima di addormentarmi ripenso a _____, e mi addormento col sorriso",
    "il mio più grande sogno da bambino era _____",
    "____ i Simpson lo avevano previsto",
    "il bottone rosso nella casa bianca serve per _____",
    "lo ammetto, adoro _____",
    "Il segreto per avere successo è ______",
    "L'unica cosa peggiore di un lunedì mattina è ______",
    "Ho comprato una nuova casa, ma non mi aspettavo ______ nel giardino.",

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
    "Produrre metanfetamina in mezzo al deserto",
    "Un fidanzato camorrista",
    "La sorella gemella",
    "Un Pe*e enorme",
    "I campi di lavoro cinesi",
    "Una Bella sculacciata",
    "Se**o nei bagli dell'autogrill",
    "Lo scontrino lungo 5 metri",
    "La password dimenticata di Netflix",
    "La bolletta della luce di dicembre",
    "7 anni senza se**o",
    "Il ragù della nonna",
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
    "un vibratore rosa",
    "Fumare in bagno a scuola",
    "un org*a gay",
    "Un threesome finito male",
    "sexting con il professore",
    "Essere scoperti con il dildo in mano",
    "Il tatuaggio fatto da ubriaco",
    "il mostro di firenze",
    "flexare la collezione di carte Pokemon",
    "un rito per evocare un demone del XIII secolo",
    "una bella milf",
    "ubriacarsi e svegliarsi in un altro paese",
    "La fila infinita all’ufficio postale",
    "una bomba a idrogeno",
    "il piano per conquistare la Polonia",
    "Zuccherare il caffè con la cocaina",
    "Le ricadute radioattive di Chernobyl",
    "fare l'elicottero con il pe*e",
    "4 ghanesi che ballano EDM con una bara sulle spalle",
    "Cambiare il pannolino",
    "Farsi circoncidere",
    "Gli assegni familiari",
    "Il sigma mindset",
    "Fare un figlio in più per ricevere più sussidi statali",
    "una mano sulla nuca durante il pom***o",
    "uscire le tette per guarire i malati di Alzheimer",
    "Luigi Di Maio e Matteo Salvini",
    "Partire per la Siria",
    "un po di droga dello stu**o",
    "quel po' di razzismo che in fondo c'è in ognuno di noi",
    "la dialettica di Sgarbi",
    "le spiagge dello sbarco",
    "fare una doccia ",
    "il reddito di cittadinanza",
    "il campo di Auschwitz",
    "della sabbia nella vag**a",
    "una grande put***a",
    "sbattere il pe*e sul tavolo in segno di protesta",
    "il suo compleanno che si trasforma in un org*a",
    "lo spe**a che cola sulle palpebre",
    "sposare a 14 anni un comandante di guerra somalo",
    "il flato vaginale la prima notte di se**o",
    "allineare la coca con la carta di credito",
    "un secondo aborto spontaneo",
    "un calcio per farla cadere dalle scale",
    "il giorno del tuo funerale",
    "l'eroina",
    "aprire un conto bancario cointestato",
    "avere un dibattito sul org***o clitorideo",
    "farsela sbattere in faccia",
    "la strage di capaci",
    "tre dita in culo",
    "rubare i soldi a medici senza frontiera",
    "dissare la comunità LGBTQ+",
    "staccare la spina della nonna per ricaricare il cellulare",
    "fare gli ASMR pippando coca",
    "un po' di sano body shaming",
    "Brumotti pestato a sangue dai bangladini",
    "l'AIDS",
    "un uomo appeso",
    "un can*ro all'ultimo stadio",
    "il piscio in bottiglia",
    "un anziano con tendenze neo-naziste",
    "gas nervino",
    "buttarsi dal palazzo più alto della città",
    "un completino sexy",
    "clara di Heidi",
    "emulare il suicidio su tiktok",
    "sponsorizzare il gioco d'azzardo ai minorenni",
    "se**o con nani",
    "fare un pom***o ad un puffo",
    "un film po**o in realtà virtuale",
    "seg***i sulle foto profilo di linkedin",
    "giocare a Mario Kart IRL con Stephen Hawking",
    "Michael Jackson che si stringe le mani sa solo per ricreare la pubblicità della Ringo",
    "una step sister incastrata nella lavatrice",
    "viaggiare nel passato e fare se**o con la propria madre",
    "scoprire di essere gay infilandosi un dito nel cu*o",
    "una golden shower",
    "vendere organi sul deep web",
    "uccidire il proprio figlio a badilate",
    "accorgersi di avere le tendenze necrofile",
    "gridare la N word",
    "la vicina a pecorina",
    "lo scr**o grigliato",
    "vendere mattoni e spacciarli per iphone di ultima generazione",
    "chiedere ad un barbone quanto costa il suo outfit",
    "chiudere tua moglie incinta in balcone in pieno inverno",
    "lo zio che racconta barzellette razziste",




  ]
};

// --- Tasto Gioca ---
document.getElementById('playBtn').addEventListener('click', () => {
  document.getElementById('playBtn').classList.add('hidden');
  document.getElementById('playerSetup').classList.remove('hidden');
});

// --- Creazione giocatori ---
function createPlayerInputs() {
  const numPlayers = parseInt(document.getElementById('numPlayersInput').value);
  if (isNaN(numPlayers) || numPlayers < 2) { alert("Inserisci almeno 2 giocatori!"); return; }
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

// --- Avvio partita ---
function startGame() {
  const inputElements = document.querySelectorAll('.playerName');
  players = [];
  inputElements.forEach(inp => { if (inp.value.trim() !== '') players.push(inp.value.trim()); });
  if (players.length < 2) { alert("Inserisci almeno 2 giocatori!"); return; }

  currentRound = 0;
  availableCards = [...responseCards[currentMode]];

  document.getElementById('modeSelection').classList.add('hidden');
  startRoundScreen();
}

// --- ROUND ---
function startRoundScreen() {
  document.getElementById('roundScreen').classList.remove('hidden');
  document.getElementById('summaryScreen').classList.add('hidden');

  currentQuestion = questionCards[currentMode][Math.floor(Math.random() * questionCards[currentMode].length)];

  document.getElementById('currentQuestion').innerText = currentQuestion;
  document.getElementById('roundInfo').innerText = `Round ${currentRound + 1} di ${players.length}`;
  document.getElementById('judgeInfo').innerText = `Giudice: ${players[currentRound % players.length]}`;
}

// --- TURNI ---
function startTurn() {
  document.getElementById('roundScreen').classList.add('hidden');
  selectedAnswers = [];
  currentPlayerIndex = 0;
  if (currentPlayerIndex === currentRound % players.length) currentPlayerIndex++;
  showPlayerTurn();
}

function showPlayerTurn() {
  if (currentPlayerIndex >= players.length) { showSummary(); return; }
  const judgeIndex = currentRound % players.length;
  if (currentPlayerIndex === judgeIndex) currentPlayerIndex++;
  if (currentPlayerIndex >= players.length) { showSummary(); return; }

  document.getElementById('playerTurn').classList.remove('hidden');
  document.getElementById('playerName').innerText = `Turno di: ${players[currentPlayerIndex]}`;
  document.getElementById('seeHandBtn').classList.remove('hidden');
  const cardsDiv = document.getElementById('playerCards');
  cardsDiv.classList.add('hidden');
  cardsDiv.innerHTML = '';
}

function seeHand() {
  const cardsDiv = document.getElementById('playerCards');
  cardsDiv.innerHTML = '';
  const hand = [];
  const tempAvailable = [...availableCards];
  for (let i = 0; i < 5 && tempAvailable.length > 0; i++) {
    const index = Math.floor(Math.random() * tempAvailable.length);
    hand.push(tempAvailable[index]);
    tempAvailable.splice(index,1);
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
  const idx = availableCards.indexOf(card);
  if (idx > -1) availableCards.splice(idx,1);
  currentPlayerIndex++;
  showPlayerTurn();
}

// --- RESOCONTO ---
function showSummary() {
  document.getElementById('playerTurn').classList.add('hidden');
  document.getElementById('summaryScreen').classList.remove('hidden');
  document.getElementById('summaryQuestion').innerText = `Domanda: ${currentQuestion}`;
  const judge = players[currentRound % players.length];
  document.getElementById('summaryJudgeInfo').innerText = `Giudice: ${judge}`;

  const div = document.getElementById('summaryAnswers');
  div.innerHTML = '';
  selectedAnswers.sort(() => Math.random() - 0.5).forEach((ans,i) => {
    const p = document.createElement('p');
    p.innerText = `${i+1}) ${ans}`;
    div.appendChild(p);
  });

  if(currentRound+1<players.length){
    document.getElementById('nextRoundBtn').classList.remove('hidden');
    document.getElementById('newGameBtn').classList.add('hidden');
  } else {
    document.getElementById('nextRoundBtn').classList.add('hidden');
    document.getElementById('newGameBtn').classList.remove('hidden');
  }
}

function nextRound() { currentRound++; startRoundScreen(); }
function restartGame() { location.reload(); }
