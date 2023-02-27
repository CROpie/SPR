function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return getRandomInt(3);
}

function getPlayerChoice() {
    hand_throw = prompt("S/P/R");
    hand_throw = hand_throw.toLowerCase();
    if (hand_throw === "s") {
        return 0;
    } else if (hand_throw === "p") {
        return 1;
    } else {
        return 2;
    }
}

function determineWinner(computer, player) {
    if (computer === player) {
        console.log("Draw!");
        return "D";
    }   else if ((player === 0 && computer === 1) || (player === 1 && computer === 2) || (player === 2 && computer === 0)) {
        console.log("You win!");
        return "P";
    }   else {
        console.log("You lose!");
        return "C";
    } 
}

function playRound() {
    computer = getComputerChoice();
    player = getPlayerChoice();
    return determineWinner(computer, player);
}

function game() {
    player_score = 0;
    computer_score = 0;
    for (let i = 0; i < 5; i++) {
        winner = playRound()
        if (winner === "P") {
            player_score++
        } else if (winner === "C") {
            computer_score++
        }
    }
    console.log(player_score);
    console.log(computer_score);
}

game()