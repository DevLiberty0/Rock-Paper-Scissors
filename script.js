const symbol = [ "Rock", "Paper", "Scissors" ]; //tablica symboli do gry
let p1 = 0;
let p2 = 0;
let zgoda = true;

function cpuPlay () { //funkcja zwracajaca losowa liczbe z zakresu 0-2
    let a = Math.floor(Math.random() * 3);
    return symbol[a];
}   

function round (first, second) {
    if (first == second) {
        console.log("Draw.");
        return; 
    }
    switch (first) {
        case "Rock":
        if (second == "Paper") {
            p2++;
            console.log("You lose. Paper beats Rock.");
            return;
        } else {
            p1++;
            console.log("You win. Rock beats Scissors.");
            return;
        }

        case "Paper":
        if (second == "Scissors") {
            p2++;
            console.log("You lose. Scissors beats Paper.");
            return;
        } else {
            p1++;
            console.log("You win. Paper beats Rock.");
            return;
        }

        case "Scissors":
        if (second == "Rock") {
            p2++;
            console.log("You lose. Rock beats Scissors.");
            return;
        } else {
            p1++;
            console.log("You win. Scissors beats Paper.");
            return;
        }
    } 
}

function game () {
    p1 = 0;
    p2 = 0;
    while (p1 < 5 && p2 < 5) {
        let playerChoice = prompt("0 - Rock, 1 - Paper, 2 - Scissors");
        round( symbol[playerChoice], cpuPlay() );
        console.log("Wynik: " + p1 + " : " + p2);
    }

    console.log( (p1 > p2) ? "You won!!!" : "You lose..." );
}

alert("Click OK to start new game");
do {
    game();
} while (confirm("Play again?"));

alert("Have a nice day.");
    