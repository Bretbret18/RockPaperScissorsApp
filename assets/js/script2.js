// // ORDER OF EVENTS // //
// player clicks rock, paper, or scissors
// player clicks Shoot!

// loading icon for 2 seconds (Opponent choosing value)
// Random value pulled from opponent array
// opponent value displayed

// Win, lose, or draw determined and diplayed in result box
// Round box changes for given round



// Figure out how result box will display
// results

// 3 Rounds

// Next Round button must only work after shoot has been
// clicked. 

// ** // ** // ** // ** // ** // ** // ** // ** // ** // **
// SHOOT EVENT

// Select Rock, Paper, or Scissors
// Press shoot!
// Opponent turn will start
// Rock, Paper, and Scissors are each highlighted for one
// second on an ascending scale. Once Rock, Paper, and Scissors
// Have been highlighted, Shoot is highlighted.
// After shoot is highlighted (for both players) Opponent
// Result box will display the choice the opponent made.
// One second after the opponents choice is displayed, the
// winner / loser column will either declare the user winner
// or loser. Winner will be displayed in green and loser will
// be diplayed in red. 
// ** // ** // ** // ** // ** // ** // ** // ** // ** // **

let playerVal = playerResult.firstChild.className.baseVal;
let opponentVal = opponentResult.firstChild.className.baseVal;


// Round code
// Game 
const expr = '';
switch (expr) {
    case 'Player Lose rock vs. paper':
        if (playerVal === 'bi bi-gem' &&
            opponentVal === 'bi bi-file-text') {
            console.log('Lose');
            playerWinColumn.innerHTML = 'Win!';
            playerWinColumn.style.color = 'green';
            opponentWinColumn.innerHTML = 'Lose!';
            opponentWinColumn.style.color = 'red';
            nextRound()
        }
        break;
    case 'Player Win rock vs. scissors':
        if (playerVal === 'bi bi-gem' &&
            opponentVal === 'bi bi-scissors') {
            console.log('win');
            playerWinColumn.innerHTML = 'Win!';
            playerWinColumn.style.color = 'green';
            opponentWinColumn.innerHTML = 'Lose!';
            opponentWinColumn.style.color = 'red';
            nextRound()
        }
        break;
    case 'Player draw rock vs. rock':
        if (playerVal === 'bi bi-gem' &&
            opponentVal === 'bi bi-gem') {
            console.log('draw');
            playerWinColumn.innerHTML = 'Draw!';
            opponentWinColumn.innerHTML = 'Draw!';
            nextRound()
        }
        break;
    case 'Player Lose paper vs. scissors':
        if (playerVal === 'bi bi-file-text' &&
            opponentVal === 'bi bi-scissors') {
            console.log('Lose');
            opponentWinColumn.innerHTML = 'Win!';
            opponentWinColumn.style.color = 'green';
            playerWinColumn.innerHTML = 'Lose!';
            playerWinColumn.style.color = 'red';
            nextRound()
        }
        break;
    case 'Player Win paper vs. rock':
        if (playerVal === 'bi bi-file-text' &&
            opponentVal === 'bi bi-gem') {
            console.log('win');
            playerWinColumn.innerHTML = 'Win!';
            playerWinColumn.style.color = 'green';
            opponentWinColumn.innerHTML = 'Lose!';
            opponentWinColumn.style.color = 'red';
            nextRound()
        }
        break;
    case 'Player draw paper vs. paper':
        if (playerVal === 'bi bi-file-text' &&
            opponentVal === 'bi bi-file-text') {
            console.log('draw');
            playerWinColumn.innerHTML = 'Draw!';
            opponentWinColumn.innerHTML = 'Draw!';
            nextRound()
        }
        break;
        case 'Player Win scissors vs. paper':
        if (playerVal === 'bi bi-scissors' &&
         opponentVal === 'bi bi-file-text') {
            console.log('Lose');
            playerWinColumn.innerHTML = 'Win!';
            playerWinColumn.style.color = 'green';
            opponentWinColumn.innerHTML = 'Lose!';
            opponentWinColumn.style.color = 'red';
            nextRound()
        }
        break;
        case 'Player Lose scissors vs. rock':
            if (playerVal === 'bi bi-gem' && 
            opponentVal === 'bi bi-scissors') {
                console.log('win');
                opponentWinColumn.innerHTML = 'Win!';
                opponentWinColumn.style.color = 'green';
                playertWinColumn.innerHTML = 'Lose!';
                playerWinColumn.style.color = 'red';
                nextRound()
            }
            break;
            case 'Player draw scissors vs. scissors':
                if (playerVal === 'bi bi-scissors' && 
                opponentVal === 'bi bi-scissors') {
                    console.log('draw');
                    playerWinColumn.innerHTML = 'Draw!';
                    opponentWinColumn.innerHTML = 'Draw!';
                    nextRound()
                }
                break;
};

    // expected output: "Mangoes and papayas are $2.79 a pound."




// // Page Load
// document.addEventListener('DOMContentLoaded', function (e) {
//     round.innerHTML = roundArray[0];
// });

