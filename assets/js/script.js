// Grab all necessary DOM elements
let playerBox = document.querySelector('#player-div');
let opponentBox = document.querySelector('#opponent-div');

const playerBtns = document.querySelectorAll('.playerBtn');
let choiceBtn = document.querySelector('#player-choice');

const playerTextBox = document.querySelector('#player-text');
const opponentTextBox = document.querySelector('#opponent-text');

let playerResultBox = document.querySelector('#result-box-player');

let opponentArray = [
    'Rock',
    'Paper',
    'Scissors'
];

playerBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        console.log(e.target);
        playerResultBox.innerHTML = e.target.innerHTML;
        if(e.target.className === 'playerBtn scissors') {
            console.log('scissors');
        } else if (e.target.className === 'playerBtn rock') {
            console.log('rock');
        } else if (e.target.className === 'playerBtn paper') {
            console.log('paper');
        }
    });
});

console.log(opponentArray[0]);
console.log(playerBtns);

choiceBtn.addEventListener('click', function(e) {
    console.log(e.currentTarget.innerHTML);
})



    


