// player DOM
// player div
let playerBox = document.querySelector('#player-div');
// round winner or loser column
const playerTextBox = document.querySelector('#player-text');
// where chosen symbol is placed
let playerResult = document.querySelector('#choice-box-player');
// player symbol buttons
const playerBtns = document.querySelectorAll('.playerBtn');
// player play game button
let shootBtn = document.querySelector('#shoot-btn');


// opponent DOM
// opponent buttons for display
const opponentBtns = document.querySelectorAll('.opponentBtn')
// opponent play game button for display
const opponentShoot = document.querySelector('#opponentShoot-btn');
// opponent symbol placement
const opponentResult = document.querySelector('#choice-box-opponent')
// 
let opponentBox = document.querySelector('#opponent-div');
// displays win/ lose column for round
const opponentTextBox = document.querySelector('#opponent-text');

// Game DOM
// resets page and game
let playAgainBtn = document.querySelector('#play-again');
// game symbols
let childSymbols = document.querySelectorAll('.bi')
// next round btn
const nextRoundBtn = document.querySelector('#next-round-btn');
// // current round
let round = document.querySelector('#round');

// // Round Number
let roundArray = [
    1,
    2,
    3
];

round.innerHTML = roundArray[0];

// PLAYER CHOICE EVENTS
function playerChoicesEvent() {
    // Player Buttons Event Listener
    playerBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {

            // Player Choice Animation
            if (btn.className === 'playerBtn rock') {
                playerResult.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
             <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
           </svg>`;


            } else if (btn.className === 'playerBtn paper') {
                playerResult.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
            fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
            <path
                d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
            <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
        </svg>`;
            } else if (btn.className === 'playerBtn scissors') {
                playerResult.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
            fill="currentColor" class="bi bi-scissors" viewBox="0 0 16 16">
            <path
                d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
        </svg>`;
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
// array of icon values
let rock = opponentArray[0].rock;
let paper = opponentArray[1].paper;
let scissors = opponentArray[2].scissors;

let symbolArray = [rock, paper, scissors];


// SHOOT EVENT// OPPONENT CHOICE EVENTS
// Shoot Event Listener
shootBtn.addEventListener('click', function (e) {

    // if(e.currentTarget && playerResult.children)
    // highlight and display rock, paper, and scissors for opponent turn 
    setTimeout(() => { opponentBtns[0].style.borderColor = 'green'; }, 0000);
    setTimeout(() => { opponentResult.innerHTML = symbolArray[0]; }, 0000);
    setTimeout(() => { opponentBtns[1].style.borderColor = 'blue'; }, 1000);
    setTimeout(() => { opponentResult.innerHTML = symbolArray[1]; }, 1000);
    setTimeout(() => { opponentBtns[2].style.borderColor = 'purple'; }, 2000);
    setTimeout(() => { opponentResult.innerHTML = symbolArray[2]; }, 2000);
    setTimeout(() => { opponentShoot.style.borderColor = 'red'; }, 3000);
    setTimeout(() => {

        opponentResult.innerHTML = symbolArray[getRandom()];

        // player: rock
        if (playerResult.firstChild.className.baseVal === 'bi bi-gem' && opponentResult.firstChild.className.baseVal === 'bi bi-scissors') {
            console.log('win');
        }
        if (playerResult.firstChild.className.baseVal === 'bi bi-gem' && opponentResult.firstChild.className.baseVal === 'bi bi-file-text') {
            console.log('lose');
        }
        if (playerResult.firstChild.className.baseVal === 'bi bi-gem' && opponentResult.firstChild.className.baseVal === 'bi bi-gem') {
            console.log('draw');
        }
        // player: paper
        if (playerResult.firstChild.className.baseVal === 'bi bi-file-text' && opponentResult.firstChild.className.baseVal === 'bi bi-scissors') {
            console.log('lose');
        }
        if (playerResult.firstChild.className.baseVal === 'bi bi-file-text' && opponentResult.firstChild.className.baseVal === 'bi bi-file-text') {
            console.log('draw');
        }
        if (playerResult.firstChild.className.baseVal === 'bi bi-file-text' && opponentResult.firstChild.className.baseVal === 'bi bi-gem') {
            console.log('win');
        }
        // player: scissors
        if (playerResult.firstChild.className.baseVal === 'bi bi-scissors' && opponentResult.firstChild.className.baseVal === 'bi bi-scissors') {
            console.log('draw');
        }
        if (playerResult.firstChild.className.baseVal === 'bi bi-scissors' && opponentResult.firstChild.className.baseVal === 'bi bi-file-text') {
            console.log('win');
        }
        if (playerResult.firstChild.className.baseVal === 'bi bi-scissors' && opponentResult.firstChild.className.baseVal === 'bi bi-gem') {
            console.log('lose');
        }
        console.log(playerResult.firstChild.className.baseVal);
        console.log(opponentResult.firstChild.className.baseVal);

    }, 3000);


    // get random symbol function
    function getRandom() {
        return Math.floor(Math.random() * opponentArray.length)
    }
})


// PLAY AGAIN FUNCTION
function playAgainEvent() {
    playAgainBtn.addEventListener('click', function (e) {
        location.reload();
    })
};


playerChoicesEvent()
playAgainEvent()

