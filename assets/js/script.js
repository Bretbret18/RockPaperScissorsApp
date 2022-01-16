// player DOM
// player div
let playerBox = document.querySelector('#player-div');
// round winner or loser column
const playerTextBox = document.querySelector('#player-text');
// where chosen symbol is placed
let playerResult = document.querySelector('#choice-box-player');
// player symbol buttons
const playerBtns = document.querySelectorAll('.playerBtn');
// player round winner
let playerWinColumn = document.querySelector('#player-text')
// Player box indicator
let playerSide = document.querySelector('#Player-side');
// player play game button
let shootBtn = document.querySelector('#shoot-btn');

// opponent DOM
// Opponent round winner
let opponentWinColumn = document.querySelector('#opponent-text')
// opponent buttons for display
const opponentBtns = document.querySelectorAll('.opponentBtn')
// opponent play game button for display
const opponentShootBtn = document.querySelector('#opponentShoot-btn');
// opponent symbol placement
const opponentResult = document.querySelector('#choice-box-opponent')
// opponent div
let opponentBox = document.querySelector('#opponent-div');
// displays win/ lose column for round
const opponentTextBox = document.querySelector('#opponent-text');
// Opponent Box indicator
let opponentSide = document.querySelector('#Opponent-side');

// Game DOM
// resets page and game
let playAgainBtn = document.querySelector('#play-again');
// game symbols
let childSymbols = document.querySelectorAll('.bi')
// next round btn
const nextRoundBtn = document.querySelector('#next-round-btn');
// current round
let round = document.querySelector('#round');
// shows player vs opponent side
const sideIndicators = document.querySelector('.side-indicator');
// win/ lose ratio per game
let resultIndicator = document.querySelector('#result-indicator');

let opponentArray = [
    {
        rock: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
          </svg>`
    },
    {
        paper: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"
            fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
            <path
                d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
            <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
        </svg>`
    },
    {
        scissors: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"
        fill="currentColor" class="bi bi-scissors" viewBox="0 0 16 16">
        <path
            d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
    </svg>`
    }
];

// array of icon html values
let rock = opponentArray[0].rock;
let paper = opponentArray[1].paper;
let scissors = opponentArray[2].scissors;

let symbolArray = [rock, paper, scissors];

function nextRound() {
    let roundIterator = 1;
    round.innerHTML = roundIterator;

    nextRoundBtn.addEventListener('click', function (e) {
        roundIterator++
        if (roundIterator >= 4) {
            roundIterator = 3;
            return;
        };

        round.innerHTML = roundIterator;
        playerResult.innerHTML = 'Choose Button!';
        opponentResult.innerHTML = '';
        playerWinColumn.innerHTML = '';
        opponentWinColumn.innerHTML = '';
        opponentResult.style.color = 'black';
        playerResult.style.color = 'black';

    });
    shootEvent();
};

// PLAYER CHOICE EVENTS
function playerChoicesEvent() {
    // CSS
    playerSide.style.fontSize = '18px';
    playerSide.style.fontWeight = '500';
    opponentSide.style.fontSize = '18px';
    opponentSide.style.fontWeight = '500';

    // Player Buttons Event Listener
    playerBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            // Player Choice Animation
            if (e.currentTarget === playerBtns[0]) {
                playerResult.innerHTML = opponentArray[0].rock;
            }
            if (e.currentTarget === playerBtns[1]) {
                playerResult.innerHTML = opponentArray[1].paper;
            }
            if (e.currentTarget === playerBtns[2]) {
                playerResult.innerHTML = opponentArray[2].scissors;
            }
        });
    });
};

// SHOOT EVENT// OPPONENT CHOICE EVENTS
// Shoot Event Listener
function shootEvent() {
    shootBtn.addEventListener('click', function (e) {

        if (playerResult.firstElementChild == null) {
            return null
        }

        // highlight and display rock, paper, and scissors for opponent turn 
        setTimeout(() => {
            opponentResult.innerHTML = opponentArray[0].rock;
        }, 0000);
        setTimeout(() => {
            opponentResult.innerHTML = opponentArray[1].paper;
        }, 1000);
        setTimeout(() => {
            opponentResult.innerHTML = opponentArray[2].scissors;
        }, 2000);
        setTimeout(() => {
            opponentResult.innerHTML = symbolArray[getRandom()]
            opponentResult.style.color = 'red';
            playerResult.style.color = 'red';

            let playerVal = playerResult.firstChild.className.baseVal;
            let opponentVal = opponentResult.firstChild.className.baseVal;

            roundResults = [
                {
                    playerWin: 0
                },
                {
                    opponentWin: 0
                },
                {
                    draw: 0
                }
            ];

          

            // Initial Score
            let gameStats = `{"Win":${roundResults[0].playerWin}, "Lose":${roundResults[1].opponentWin}, "Draw":${roundResults[2].draw}}`;
            console.log(JSON.parse(gameStats))

            // player: rock
            if (playerVal === 'bi bi-gem' && opponentVal === 'bi bi-scissors') {
                roundResults[0].playerWin++;
                
                if (roundResults[0].playerWin == true) {
                    let winResult = roundResults[0].playerWin;
                    console.log(winResult);
                    handleLocalStorage(winResult)
                }
                console.log(`${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`);
                console.log('win');
                playerWinColumn.innerHTML = 'Win!';
                playerWinColumn.style.color = 'green';
                opponentWinColumn.innerHTML = 'Lose!';
                opponentWinColumn.style.color = 'red';

            }

            if (playerVal === 'bi bi-gem' && opponentVal === 'bi bi-file-text') {
                roundResults[1].opponentWin++
                if (roundResults[1].opponentWin == true) {
                    let loseResult = roundResults[1].opponentWin;
                    console.log(loseResult);
                    handleLocalStorage(loseResult)
                }
                console.log(`${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`);
                console.log('lose');
                playerWinColumn.innerHTML = 'Lose!';
                playerWinColumn.style.color = 'red';
                opponentWinColumn.innerHTML = 'Win!';
                opponentWinColumn.style.color = 'green';

            }

            if (playerVal === 'bi bi-gem' && opponentVal === 'bi bi-gem') {
                roundResults[2].draw++
                if (roundResults[2].draw == true) {
                    let drawResult = roundResults[2].draw;
                    handleLocalStorage(drawResult)
                    console.log(drawResult);
                }
                console.log(`${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`);
                console.log('draw');
                playerWinColumn.innerHTML = 'Draw!';
                opponentWinColumn.innerHTML = 'Draw!';

            }
            // player: paper
            if (playerVal === 'bi bi-file-text' && opponentVal === 'bi bi-scissors') {
                roundResults[1].opponentWin++
                if (roundResults[1].opponentWin == true) {
                    let loseResult = roundResults[1].opponentWin;
                    handleLocalStorage()
                    console.log(loseResult);
                }
                console.log(`${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`);
                console.log('lose');
                playerWinColumn.innerHTML = 'Lose!';
                playerWinColumn.style.color = 'red';
                opponentWinColumn.innerHTML = 'Win!';
                opponentWinColumn.style.color = 'green';

            }

            if (playerVal === 'bi bi-file-text' && opponentVal === 'bi bi-file-text') {
                roundResults[2].draw++
                if (roundResults[2].draw == true) {
                    let drawResult = roundResults[2].draw;
                    handleLocalStorage()
                    console.log(drawResult);
                }
                console.log(`${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`);
                console.log('draw');
                playerWinColumn.innerHTML = 'Draw!';
                opponentWinColumn.innerHTML = 'Draw!';

            }

            if (playerVal === 'bi bi-file-text' && opponentVal === 'bi bi-gem') {
                roundResults[0].playerWin++;
                if (roundResults[0].playerWin == true) {
                    let winResult = roundResults[0].playerWin;
                    handleLocalStorage()
                    console.log(winResult);
                }
                console.log(`${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`);
                console.log('win');
                playerWinColumn.innerHTML = 'Win!';
                playerWinColumn.style.color = 'green';
                opponentWinColumn.innerHTML = 'Lose!';
                opponentWinColumn.style.color = 'red';

            }
            // player: scissors
            if (playerVal === 'bi bi-scissors' && opponentVal === 'bi bi-scissors') {
                roundResults[2].draw++;
                if (roundResults[2].draw == true) {
                    let drawResult = roundResults[2].draw;
                    handleLocalStorage()
                    console.log(drawResult);
                }
                console.log(`${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`);
                console.log('draw');
                playerWinColumn.innerHTML = 'Draw!';
                opponentWinColumn.innerHTML = 'Draw!';

            }

            if (playerVal === 'bi bi-scissors' && opponentVal === 'bi bi-file-text') {
                roundResults[0].playerWin++;
                if (roundResults[0].playerWin == true) {
                    let winResult = roundResults[0].playerWin;
                    handleLocalStorage()
                    console.log(winResult);
                }
                console.log(`${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`);
                console.log('win');
                playerWinColumn.innerHTML = 'Win!';
                playerWinColumn.style.color = 'green';
                opponentWinColumn.innerHTML = 'Lose!';
                opponentWinColumn.style.color = 'red';

            }

            if (playerVal === 'bi bi-scissors' && opponentVal === 'bi bi-gem') {
                roundResults[1].opponentWin++
                if (roundResults[1].opponentWin == true) {
                    let loseResult = roundResults[1].opponentWin;
                    handleLocalStorage()
                    console.log(loseResult);
                }
                console.log(`${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`);
                console.log('lose');
                playerWinColumn.innerHTML = 'Loss!';
                playerWinColumn.style.color = 'red';
                opponentWinColumn.innerHTML = 'Win!';
                opponentWinColumn.style.color = 'green';

            }

            handleLocalStorage()

            // localStorage handling function
            function handleLocalStorage() {
                if(roundResults[0].playerWin || roundResults[1].opponentWin || roundResults[2].draw){
                    
                }
                let gameStats = `{"Win":${roundResults[0].playerWin}, "Lose":${roundResults[1].opponentWin}, "Draw":${roundResults[2].draw}}`;
                console.log(JSON.parse(gameStats))
                localStorage.setItem('gameStats', gameStats)
            };

            // Player / Opponent Shoot Results
            console.log(playerVal);
            console.log(opponentVal);

        }, 3000);

        // get random symbol function
        function getRandom() {
            return Math.floor(Math.random() * opponentArray.length)
        }
    });
};

// PLAY AGAIN FUNCTION
function playAgainEvent() {
    playAgainBtn.addEventListener('click', function (e) {
        location.reload();
    })
};

nextRound()
playerChoicesEvent()
playAgainEvent()


