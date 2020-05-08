"use strict";
let sequences = ["Currywurst", "Kokulores", "Teddybär"];
let watchtime;
let playtime;
let sequence;
let random;
let playbutton;
let inputSequence;
let inputSequenceButton;
let inputWatchtime;
let inputPlaytime;
let currentSequence;
let memoryCards;
let showWatchtime;
let showPlaytime;
function chooseWord() {
    sequence = inputSequence.value;
    memoryCards.innerHTML = "";
    inputSequenceButton.setAttribute("style", "color: darkgreen");
}
function randomWord() {
    var tmp, rand;
    for (var i = 0; i < sequences.length; i++) {
        rand = Math.floor(Math.random() * sequences.length);
        tmp = sequences[i];
        sequences[i] = sequences[rand];
        sequences[rand] = tmp;
    }
    sequence = sequences[1];
    memoryCards.innerHTML = "";
}
function startGame() {
    console.log("Let's play!");
    currentSequence.innerHTML = sequence;
    watchtime = inputWatchtime.value;
    playtime = inputPlaytime.value;
    var singleLetters = sequence.split("");
    var tmp, rand;
    for (var i = 0; i < singleLetters.length; i++) {
        rand = Math.floor(Math.random() * singleLetters.length);
        tmp = singleLetters[i];
        singleLetters[i] = singleLetters[rand];
        singleLetters[rand] = tmp;
    }
    console.log(singleLetters);
    for (let i = 0; i < singleLetters.length; i++) {
        memoryCards.innerHTML += "<span class='cards carddown'>" + singleLetters[i] + "</span>";
    }
    memoryCards.addEventListener("click", clickCard);
    showWatchtime.innerHTML = watchtime + " sec";
    showPlaytime.innerHTML = playtime + " sec";
    window.setTimeout(alertFunc, 6000);
    function alertFunc() {
        alert("Mehr war aufgrund der Zeit leider nicht drin...");
    }
}
function clickCard() {
    console.log(Event.target);
    var clickedCard = Event.target;
    clickedCard.setAttribute("class", "cardup");
}
window.addEventListener("load", function () {
    console.log("script verknüpft");
    random = document.querySelector("#randombutton");
    playbutton = document.querySelector("#playbutton");
    inputSequence = document.querySelector("#inputSequence");
    inputSequenceButton = document.querySelector(".fas");
    inputWatchtime = document.querySelector("#inputWatchTime");
    inputPlaytime = document.querySelector("#inputPlayTime");
    currentSequence = document.querySelector("#word");
    memoryCards = document.querySelector("#memoryCards");
    showWatchtime = document.querySelector("#watchTime");
    showPlaytime = document.querySelector("#playTime");
    inputSequenceButton.addEventListener("click", chooseWord);
    random.addEventListener("click", randomWord);
    playbutton.addEventListener("click", startGame);
});
//# sourceMappingURL=Sequenzmemory.js.map