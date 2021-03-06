let userMove;
let userScore = 0;
let computerScore = 0;
let round = 0;
function playGame (move) {
    userMove = move;

    let userValue;
    let roundWinner;

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
        round = calcRound(round);
        roundWinner = 'tie';
        printRound(round, userMove, compMove, roundWinner);
    }
    else if ( ((userValue > compValue) && (userValue - compValue != 2) || (userValue - compValue == -2) )) {
        callGame('user', 'computer', userMove, compMove);
        userScore = calcScore(userScore);
        printScore(userScore, computerScore);
        round = calcRound(round);
        roundWinner = 'user';
        printRound(round, userMove, compMove, roundWinner);
        
    }
    else {
        callGame('computer', 'user', compMove, userMove);
        computerScore = calcScore(computerScore);
        printScore(userScore, computerScore);
        round = calcRound(round);
        roundWinner = 'computer';
        printRound(round, userMove, compMove, roundWinner);
       
    }
}

function calcScore(winner) {
    winner++;
    return winner;
}

function printScore(userScore, computerScore) {
    let newScoreUser = document.getElementById('player_score');
    let newScoreComp = document.getElementById('computer_score');
    newScoreUser.textContent = `${userScore}`;
    newScoreComp.textContent = `${computerScore}`;
}

function calcRound(round) {
    round++;
    return round;
}

function printRound(round, userMove, computerMove, winner) {
    let roundTable = document.querySelector('#rounds');
    let newRound = document.createElement('tr');
    let roundNum = document.createElement('td');
    let userRound = document.createElement('td');
    let compRound = document.createElement('td');
    roundNum.innerHTML = `${round}`;
    userRound.innerHTML = `<i class="far fa-hand-${userMove}"></i>`;
    compRound.innerHTML = `<i class="far fa-hand-${computerMove}"></i>`;
    newRound.appendChild(roundNum);
    newRound.appendChild(userRound);
    newRound.appendChild(compRound);
    roundTable.appendChild(newRound);
    console.log(roundTable);
    if (winner == 'user') {
        userRound.classList.add('winner');
    }
    else if (winner == 'computer') {
        compRound.classList.add('winner');
    }

    

}


function callGame(winner, loser, winnerMove, loserMove) {
    let loserSentValue = getRandomInt(0,3);
    let winnerSentValue = getRandomInt(0,3);
    let loserSentArray = [`The ${loser} tried desperately to fight with ${loserMove}, but it's no use.`,
                        `The ${loser} makes an attempted sneak attack with ${loserMove}, but the ${winner} sees it coming.`,
                    `After much thought, the ${loser} throws ${loserMove}. Little did he know what was waiting for him.`,
                    `The ${loser} throws up his hands and recklessly throws ${loserMove}.`]
    let winnerSentArray = [`${winner.charAt(0).toUpperCase() + winner.slice(1)} destroys the ${loser}'s ${loserMove} with ${winnerMove}. It wasn't even a contest.`,
                    `The ${winner} sees the ${loserMove} and defiantly throws ${winnerMove} to obliterate the ${loser}.`,
                    `Seeing the ${loserMove}, the ${winner} laughs mockingly at the ${loserMove} and throws ${winnerMove} to stop the ${loser} in their tracks.`,
                    `Without hesitation, the ${winner} throws ${winnerMove}. The ${loser} is taken aback as he sees his ${loserMove} get obliterated without effort.`]

    //winnerMove = winnerMove.charAt(0).toUpperCase() + winnerMove.slice(1);
    let bg = document.getElementById('battleground');
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