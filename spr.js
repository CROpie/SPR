function unfreeze_buttons() {
    document.querySelectorAll('.throw').forEach(choice => {
        choice.disabled = false;
    });
}

function freeze_buttons() {
    document.querySelectorAll('.throw').forEach(choice => {
            choice.disabled = true;
    });
}

function check_for_winner() {
    if (player_score === 5) {
        results_table.textContent = 'You Have Beaten The Computer!!'
        freeze_buttons()
    } else if (computer_score === 5) {
        results_table.textContent = 'You Lost To The Computer!!'
        freeze_buttons()
    }
}

function determineWinner(computer, player) {
    if (computer === player) {
        draws_score++
        results_table.textContent = 'Draw!'
        table_draws.textContent = draws_score;
    }   else if ((player === 0 && computer === 1) || (player === 1 && computer === 2) || (player === 2 && computer === 0)) {
        player_score++
        results_table.textContent = 'You Win!'
        table_wins.textContent = player_score;
    }   else {
        computer_score++
        results_table.textContent = 'You Lose!'
        table_losses.textContent = computer_score;
    } 
    check_for_winner()
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return getRandomInt(3);
}

function playGame(throw_choice) {
    computer = getComputerChoice();
    return determineWinner(computer, throw_choice);
}

// reset both the score text fields, as well as the associated constants
function reset_scores() {
    table_wins.textContent = (player_score = 0);
    table_losses.textContent = (computer_score = 0);
    table_draws.textContent = (draws_score = 0);
    unfreeze_buttons();
}

// Initialize score variables
let player_score = 0;
let computer_score = 0;
let draws_score = 0;

// Set up variables to easly refer to the text fields
const results_table = document.querySelector('#results');
const table_wins = document.querySelector('#player_wins');
const table_losses = document.querySelector('#computer_wins');
const table_draws = document.querySelector('#nobody_wins');

// Assigning the reset score function to the reset button
document.querySelector('#reset').onclick = reset_scores;

// Make the buttons functional
document.querySelectorAll('.throw').forEach(choice => {
    choice.onclick = () => {
        playGame(parseInt(choice.dataset.num))
    }
});