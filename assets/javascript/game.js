var wins = 0;
var losses = 0;

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    if ((userGuess === "p") && (computerGuess === "s")) {
        losses++;
    }
    if ((userGuess === "r") && (computerGuess === "s")) {
        wins++;
    }
}