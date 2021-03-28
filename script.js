const symbol = [ "Rock", "Paper", "Scissors" ];
const tablica = document.querySelector('#tablica');
const button = document.querySelectorAll('.button');

function cpuPlay () {
    let a = Math.floor(Math.random() * 3);
    return symbol[a];
}   

function round (first, second) {
    if (first == second) return "Draw."; 
    switch (first) {
        case "Rock":
        if(second == "Paper") return "You lose. Paper beats Rock.";
        return "You win. Rock beats Scissors.";

        case "Paper":
        if (second == "Scissors") return "You lose. Scissors beats Paper.";
        return "You win. Paper beats Rock.";

        case "Scissors":
        if (second == "Rock") return "You lose. Rock beats Scissors.";
        return "You win. Scissors beats Paper.";
    } 
}

function removeTransition(e) {
    if(e.propertyName !== 'box-shadow' && e.propertyName !== 'transform') return;
    this.classList.remove('buttonAnim');
}

function playRound(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('buttonAnim');
    
    const cpu = cpuPlay();
    tablica.textContent = key.id + " vs " + cpu + "\r\n" + round(key.id, cpu);
}

const keys = document.querySelectorAll('.button');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playRound);

