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


// // Page Load
// document.addEventListener('DOMContentLoaded', function (e) {
//     round.innerHTML = roundArray[0];
// });

// NEXT ROUND FUNCTION //
// Next round will save values of initial round in localStorage
// until play Again! button is pressed, at which point they
// are reset values

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

let gameStats = `${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`;

roundResults[0].playerWin++

console.log(roundResults[0].playerWin);

            console.log(gameStats);
            roundResults[1].opponentWin++
            console.log(`${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`);
            console.log(gameStats);
// console.log(roundResults[0].playerWin, roundResults[1].opponentWin, roundResults[2].draw);

let roundResult = localStorage.getItem('roundResults');
               
                if (roundResult) {
                    roundResult = [];
                } else {
                    localStorage.setItem('win - lose - draw', `${roundResults[0].playerWin} ${roundResults[1].opponentWin} ${roundResults[2].draw}`)
                }


