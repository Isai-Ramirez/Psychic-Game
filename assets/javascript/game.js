var wins = 0;
var losses = 0;
var computerChoices ="a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,"

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if ((userGuess === event.key) && (computerGuess === event.key)) {
        wins++;
    }
    if ((userGuess === event.key) && (computerGuess === event.key)) {
        losses++;
    }
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
}