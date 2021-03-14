const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.getElementById('modal');
const scoreboard = {
    player: 0,
    computer: 0
}

// Play game
function play(e) {
    console.log(e.target.id);
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
