// 
let playerBox = document.querySelector('#player-div');
const playerTextBox = document.querySelector('#player-text');
let playerChoiceBox = document.querySelector('#choice-box-player');

const playerBtns = document.querySelectorAll('.playerBtn');
let shootBtn = document.querySelector('#shoot-btn');

const opponentBtns = document.querySelectorAll('.opponentBtn')
const opponentShoot = document.querySelector('#opponentShoot-btn');
const opponentResult = document.querySelector('#choice-box-opponent')
let opponentBox = document.querySelector('#opponent-div');
const opponentTextBox = document.querySelector('#opponent-text');

let playAgainBtn = document.querySelector('#play-again');

let round = document.querySelector('#round');

// Round Number
let roundArray = [
    1,
    2,
    3
];

// Page Load
document.addEventListener('DOMContentLoaded', function (e) {
    round.innerHTML = roundArray[0];
});


// Play again function
function playAgainEvent() {
    playAgainBtn.addEventListener('click', function (e) {
        location.reload();
    })
};


// PLAYER CHOICE EVENTS
function playerChoicesEvent() {
    // Player Buttons Event Listener
    playerBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            console.log(e.currentTarget.className);
            // Player Choice Animation
            if (btn.className === 'playerBtn rock') {
                playerChoiceBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
             <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
           </svg>`;
            } else if (btn.className === 'playerBtn paper') {
                playerChoiceBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
            fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
            <path
                d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
            <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
        </svg>`
            } else if (btn.className === 'playerBtn scissors') {
                playerChoiceBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
            fill="currentColor" class="bi bi-scissors" viewBox="0 0 16 16">
            <path
                d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
        </svg>`
            }
        });
    });


};

let opponentArray = [
    {
        rock: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
          </svg>`
    },
    {
        paper: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
            fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
            <path
                d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
            <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
        </svg>`
    },
    {
        scissors: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
        fill="currentColor" class="bi bi-scissors" viewBox="0 0 16 16">
        <path
            d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
    </svg>`
    }
];

// SHOOT EVENT
// array of icon values
let rock = opponentArray[0].rock;
let paper = opponentArray[1].paper;
let scissors = opponentArray[2].scissors;

let symbolArray = [rock, paper, scissors];

// Shoot Event Listener
shootBtn.addEventListener('click', function (e) {
    console.log(e.currentTarget.innerHTML);
    // highlight rock, paper, and scissors for opponent turn
    setTimeout(() => { opponentBtns[0].style.borderColor = 'white'; }, 0000);
    setTimeout(() => { opponentBtns[1].style.borderColor = 'white'; }, 1000);
    setTimeout(() => { opponentBtns[2].style.borderColor = 'white'; }, 2000);
    setTimeout(() => { opponentShoot.style.borderColor = 'red'; }, 3000);
    setTimeout(() => { opponentResult.innerHTML = symbolArray[getRandom()]; }, 3000);
    console.log(symbolArray[getRandom()]);

})

function getRandom() {
    return Math.floor(Math.random() * opponentArray.length)
}










playerChoicesEvent()
playAgainEvent()

