// PLAYER DOM
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
// OPPONENT DOM
// Opponent round winner
let opponentWinColumn = document.querySelector('#opponent-text')
// opponent symbol placement
const opponentResult = document.querySelector('#choice-box-opponent')
// displays win/ lose column for round
const opponentTextBox = document.querySelector('#opponent-text');
// Opponent Box indicator
let opponentSide = document.querySelector('#Opponent-side');
// GAME DOM
// resets page and game
let playAgainBtn = document.querySelector('#play-again');
// next round btn
const nextRoundBtn = document.querySelector('#next-round-btn');
// current round
let round = document.querySelector('#round');
// win/ lose ratio per game
let resultIndicator = document.querySelector('#result-indicator');
// shoot caller
let caller = document.querySelector('#caller');

caller.style.display = 'none';

let roundIterator = 1;
round.innerHTML = roundIterator;

playerResult.style.color = 'white';
opponentResult.style.color = 'white';
nextRoundBtn.style.pointerEvents = 'none';

const game = {
    score: { win: 0, lose: 0, draw: 0 },
    symbolArray: [
        {
            rock: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
  </svg>`},
        {
            paper: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
  fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
  <path
      d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
  <path
      d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
</svg>`},
        {
            scissors: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
fill="currentColor" class="bi bi-scissors" viewBox="0 0 16 16">
<path
    d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
</svg>`},
    ],
    btnsHandler: function () {
        // Player Buttons Event Listener
        playerBtns.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                function btnChosenAnim() {
                    if (playerBtns) {
                        opponentResult.innerHTML = 'Press Shoot!';
                        opponentResult.style.color = '#fcff54';
                    }
                }
                // Player Choice Animation
                if (e.currentTarget === playerBtns[0]) {
                    playerResult.innerHTML = game.symbolArray[0].rock;
                    btnChosenAnim()
                }
                if (e.currentTarget === playerBtns[1]) {
                    playerResult.innerHTML = game.symbolArray[1].paper;
                    btnChosenAnim()
                }
                if (e.currentTarget === playerBtns[2]) {
                    playerResult.innerHTML = game.symbolArray[2].scissors;
                    btnChosenAnim()
                }
            });
        });
    },
    getRound: function () {
        nextRoundBtn.addEventListener('click', function (e) {
            if(playerResult.firstElementChild == null && opponentResult.firstElementChild == null){
                nextRoundBtn.style.pointerEvents = 'none';
                shootBtn.style.pointerEvents = 'none';
            }

            window.scrollTo(0, 0);
            
            if (game.score.win >= 2 || game.score.lose >= 2) {
                nextRoundBtn.style.pointerEvents = 'none';
                game.gameOver()
                return null
            }
            if (game.score.win || game.score.lose || game.score.draw) {
                // PROBLEM: prevent additional round clicks per round
                
                roundIterator = roundIterator+1
            }

            round.innerHTML = roundIterator;
            game.roundStyles()
        })
    },
    roundStyles: function () {
        nextRoundBtn.style.pointerEvents = 'none';
        shootBtn.style.pointerEvents = 'auto';
        playerResult.innerHTML = 'Choose Button!';
        opponentResult.innerHTML = 'Choose Button!';
        opponentResult.style.color = 'white';
        playerResult.style.color = 'white';
        caller.style.display = 'none';
        playerBtns.forEach(function (btn) {
            btn.style.pointerEvents = 'auto'
        })
    },
    shootEvent: function () {
        shootBtn.addEventListener('click', function (e) {
            window.scrollTo(0, 0);
            
            if (playerResult.firstElementChild == null) {
                return null
            }
            function shootPlayerColor() {
                playerResult.style.color = '#fcff54';
            }

            setTimeout(() => {
                shootPlayerColor()
                opponentResult.innerHTML = game.symbolArray[0].rock;
                caller.style.color = '#fcff54';
                caller.style.display = 'block';
                caller.innerHTML = 'Rock!';
                nextRoundBtn.style.pointerEvents = 'none';
            }, 0000);
            setTimeout(() => {
                shootPlayerColor()
                opponentResult.innerHTML = game.symbolArray[1].paper;
                caller.innerHTML = 'Paper!';
                
            }, 1000);
            setTimeout(() => {
                shootPlayerColor()
                opponentResult.innerHTML = game.symbolArray[2].scissors;
                caller.innerHTML = 'Scissors!'
                
            }, 2000);
            setTimeout(() => {
                let rockResult = game.symbolArray[0].rock;
                let paperResult = game.symbolArray[1].paper;
                let scissorsResult = game.symbolArray[2].scissors;

                let gameArrayResults = [rockResult, paperResult, scissorsResult]

                caller.style.color = '#eb2121';
                caller.innerHTML = 'Shoot!';

                opponentResult.innerHTML = gameArrayResults[getRandom()];
                // opponentResult.style.color = 'red';
                // playerResult.style.color = 'red';

                let playerVal = playerResult.firstChild.className.baseVal;
                let opponentVal = opponentResult.firstChild.className.baseVal;

                nextRoundBtn.style.pointerEvents = 'auto';

                // Rock
                if (playerVal === 'bi bi-gem' && opponentVal === 'bi bi-scissors') {
                    game.roundResultPlayerWin()
                }
                if (playerVal === 'bi bi-gem' && opponentVal === 'bi bi-file-text') {
                    game.roundResultPlayerLose()
                }
                if (playerVal === 'bi bi-gem' && opponentVal === 'bi bi-gem') {
                    game.roundResultDraw()
                }
                // Paper
                if (playerVal === 'bi bi-file-text' && opponentVal === 'bi bi-gem') {
                    game.roundResultPlayerWin()
                }
                if (playerVal === 'bi bi-file-text' && opponentVal === 'bi bi-scissors') {
                    game.roundResultPlayerLose()
                }
                if (playerVal === 'bi bi-file-text' && opponentVal === 'bi bi-file-text') {
                    game.roundResultDraw()
                }
                // Scissors
                if (playerVal === 'bi bi-scissors' && opponentVal === 'bi bi-file-text') {
                    game.roundResultPlayerWin()
                }
                if (playerVal === 'bi bi-scissors' && opponentVal === 'bi bi-gem') {
                    game.roundResultPlayerLose()
                }
                if (playerVal === 'bi bi-scissors' && opponentVal === 'bi bi-scissors') {
                    game.roundResultDraw()
                }
            }, 3000);
            
            playerBtns[0].style.pointerEvents = 'none';
            playerBtns[1].style.pointerEvents = 'none';
            playerBtns[2].style.pointerEvents = 'none';
            nextRoundBtn.style.pointerEvents = 'none';
            shootBtn.style.pointerEvents = 'none';

            // get random symbol function
            function getRandom() {
                return Math.floor(Math.random() * game.symbolArray.length)
            };
        });
    },
    roundResultPlayerWin: function () {
        game.score.win++;
        opponentResult.style.color = 'red';
                playerResult.style.color = 'green';
        console.log('record', `Win: ${game.score.win} Lose: ${game.score.lose} Draw: ${game.score.draw}`);
        localStorage.setItem('record', `Win: ${game.score.win} Lose: ${game.score.lose} Draw: ${game.score.draw}`)
        resultIndicator.innerHTML = `Win: ${game.score.win} Lose: ${game.score.lose} Draw: ${game.score.draw}`;
    },
    roundResultPlayerLose: function () {
        game.score.lose++;
        opponentResult.style.color = 'green';
                playerResult.style.color = 'red';
        console.log('record', `Win: ${game.score.win} Lose: ${game.score.lose} Draw: ${game.score.draw}`);
        localStorage.setItem('record', `Win: ${game.score.win} Lose: ${game.score.lose} Draw: ${game.score.draw}`)
        resultIndicator.innerHTML = `Win: ${game.score.win} Lose: ${game.score.lose} Draw: ${game.score.draw}`;
    },
    roundResultDraw: function () {
        game.score.draw++;
        opponentResult.style.color = '#cccdcf';
        playerResult.style.color = '#cccdcf';
        console.log('record', `Win: ${game.score.win} Lose: ${game.score.lose} Draw: ${game.score.draw}`);
        localStorage.setItem('record', `Win: ${game.score.win} Lose: ${game.score.lose} Draw: ${game.score.draw}`)
        resultIndicator.innerHTML = `Win: ${game.score.win} Lose: ${game.score.lose} Draw: ${game.score.draw}`;
    },
    gameOver: function () {
        return null
    },
    playAgain: function () {
        
        playAgainBtn.addEventListener('click', function (e) {
            localStorage.removeItem('record', `Win: ${game.score.win} Lose: ${game.score.lose} Draw: ${game.score.draw}`)
            location.reload();
            window.scrollTo(0, 0)
        });
      
    }
    
};



game.btnsHandler()
game.shootEvent()
game.getRound()
game.gameOver()
game.playAgain()


// TASKS LEFT TO COMPLETE:
// - Create Page that game cuts to when player
// wins or loses that states that the player has won
// - Finish info page that explains the rules of the game
// and functionality
// - Convert CSS to SASS






