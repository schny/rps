//let userMove;
//do {
//userMove = prompt('Rock, paper, or scissors?');
//userMove = userMove.toLowerCase();
//}
//while (userMove != 'rock' && userMove != 'paper' && userMove != 'scissors')

//trying to get data from button



let userMove;
let userScore = 0;
let computerScore = 0;
function playGame (move) {
    userMove = move;

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
        callGame('user', 'computer', userMove, compMove);
        makeHistory(1, userMove, compMove);
    }
    else if ( ((userValue > compValue) && (userValue - compValue != 2) || (userValue - compValue == -2) )) {
        callGame('user', 'computer', userMove, compMove);
        userScore = calcScore(userScore);
        printScore(userScore, computerScore);
        makeHistory(1, userMove, compMove);
        console.log('poop');
    }
    else {
        callGame('computer', 'user', compMove, userMove);
        computerScore = calcScore(computerScore);
        printScore(userScore, computerScore);
        makeHistory(userMove, compMove);
    }
}

function calcScore(winner) {
    winner++;
    return winner;
}

function printScore(userScore, computerScore) {
    newScoreUser = document.getElementById('player_score');
    newScoreComp = document.getElementById('computer_score');
    newScoreUser.innerHTML = `${userScore}`;
    newScoreComp.innerHTML = `${computerScore}`;
}

function calcRound() {

}

function makeHistory(roundNum, userMove, computerMove) {
    round = document.getElementById('round');
    player_move = document.getElementById('player_move');
    computer_move = document.getElementById('computer_move');
    player_move.innerHTML = `<i class="far fa-hand-${userMove}"></i>`;
    computer_move.innerHTML = `<i class="far fa-hand-${computerMove}"></i>`;
}

function callGame(winner, loser, winnerMove, loserMove) {
    loserSentValue = getRandomInt(0,3);
    winnerSentValue = getRandomInt(0,3);
    loserSentArray = [`The ${loser} tried desperately to fight with ${loserMove}, but it's futile.`,
                        `The ${loser} makes an attempted sneak attack with ${loserMove}, but the ${winner} sees it coming.`,
                    `After much thought, the ${loser} throws ${loserMove}. Little did he know what was waiting for him.`,
                    `The ${loser} throws up his hands and recklessly throws ${loserMove}.`]
    winnerSentArray = [`${winner.charAt(0).toUpperCase() + winner.slice(1)} destroys the ${loser}'s ${loserMove} with ${winnerMove}. It wasn't even a contest.`,
                    `The ${winner} sees the ${loserMove} and defiantly throws ${winnerMove} to obliterate the ${loser}.`,
                    `Seeing the ${loserMove}, the ${winner} laughs mockingly at the ${loserMove} and throws ${winnerMove} to stop the ${loser} in their tracks.`,
                    `Without hesitation, the ${winner} throws ${winnerMove}. The ${loser} is taken aback as he sees his ${loserMove} get obliterated without effort.`]

    //winnerMove = winnerMove.charAt(0).toUpperCase() + winnerMove.slice(1);
    bg = document.getElementById('battleground');
    if (winnerMove == loserMove) {
        bg.innerHTML = `${winner} plays ${winnerMove}, ${loser} plays ${loserMove}<p>It's a tie.`;
    }
    else {
        bg.innerHTML = `${winner} plays ${winnerMove}, ${loser} plays ${loserMove}<p>
        <i>${loserSentArray[loserSentValue]} ${winnerSentArray[winnerSentValue]}</i>
        <p><b><h3>
        ${winnerMove} beats ${loserMove} - ${winner} takes the round</h3></b>`;
    }

}
        
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}