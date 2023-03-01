function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return getRandomInt(3);
}

function determineWinner(computer, player) {
    if (computer === player) {
        results_table.textContent = 'Draw!'
        updateScore("D");
    }   else if ((player === 0 && computer === 1) || (player === 1 && computer === 2) || (player === 2 && computer === 0)) {
        results_table.textContent = 'You Win!'
        updateScore("P");
    }   else {
        results_table.textContent = 'You Lose!'
        updateScore("C");
    } 
}

function playRound() {
    computer = getComputerChoice();
    player = getPlayerChoice();
    return determineWinner(computer, player);
}

function updateScore(round_outcome) {
    if (round_outcome === "P") {
        player_score++
        table_wins.textContent = player_score;
    } else if (round_outcome === "C") {
        computer_score++
        table_losses.textContent = computer_score;
    } else {
        draws_score++
        table_draws.textContent = draws_score;
    }
    check_for_winner()
}

function check_for_winner() {
    if (player_score === 5) {
        results_table.textContent = 'You Have Beaten The Computer!!'
    } else if (computer_score === 5) {
        results_table.textContent = 'You Lost To The Computer!!'
    }
}

function reset_scores() {
    table_wins.textContent = (player_score = 0);
    table_losses.textContent = (computer_score = 0);
    table_draws.textContent = (draws_score = 0);
}

let player_score = 0;
let computer_score = 0;
let draws_score = 0;

function playGame(throw_choice) {
    computer = getComputerChoice();
    return determineWinner(computer, throw_choice);
}
const play_scissors = document.querySelector('#scissors');
const play_paper = document.querySelector('#paper');
const play_rock = document.querySelector('#rock');
const results_table = document.querySelector('.results');
const reset_button = document.querySelector('#reset');

const table_wins = document.querySelector('#player_wins');
const table_losses = document.querySelector('#computer_wins');
const table_draws = document.querySelector('#nobody_wins');

table_wins.textContent = player_score;
table_losses.textContent = computer_score;
table_draws.textContent = draws_score;

play_scissors.addEventListener('click', () => {
    playGame(0);
});

play_paper.addEventListener('click', () => {
    playGame(1);
});

play_rock.addEventListener('click', () => {
    playGame(2);
});

reset_button.addEventListener('click', () => {
    reset_scores();
});