let userMove;
do {
userMove = prompt('Rock, paper, or scissors?');
userMove = userMove.toLowerCase();
}
while (userMove != 'rock' && userMove != 'paper' && userMove != 'scissors')
   
let userValue;
if (userMove =='rock') {
    userValue = 0;
}
else if (userMove =='paper') {
    userValue = 1;
}
else {
    userValue = 2;
}

let moveArray = ['rock','paper','scissors']
let compValue = getRandomInt(0,2);
let compMove = moveArray[compValue];
console.log(`User plays ${userMove}. Computer plays ${compMove}.`);
        
if (userValue == compValue) {
    console.log("It's a tie!");
}
else if ((userValue == 0 && compValue == 2) || userValue > compValue) {
    callGame('User', userMove, compMove);
}
else {
    callGame('Computer', compMove, userMove);
}
        
function callGame(winner, winnerMove, loserMove) {
    winnerMove = winnerMove.charAt(0).toUpperCase() + winnerMove.slice(1);
    console.log(`${winner} wins! ${winnerMove} beats ${loserMove}!`);
}
        
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}
        