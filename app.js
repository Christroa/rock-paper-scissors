let score = 0;
let cscore = 0;
let computerPlay = () => {
    let RPS = ['Rock', 'Paper', 'Scissors'];
    let randomPicker = Math.floor(Math.random() * 3);
    let computerSelect = RPS[randomPicker];
    console.log('Computer Selected - ', computerSelect);
    return computerSelect;
}

let play = (player, computer) => {
    // let playerInput = prompt('Please Enter Rock or Paper or Scissors');
    if (player == 'Rock' && computer == 'Rock') {
        text = 'It\s a Tie!';
        // score = null;
        // cscore = null;
        return text;
    } else if(player == 'Rock' && computer == 'Paper') {
        text = 'You Lose! Papper covers Rock.';
        // score = 0;
        cscore = ++cscore;
        return ('You Lose! Papper covers Rock.');
    } else if (player == 'Rock' && computer == 'Scissors') {
        text = 'You Win! Rock smashes scissors.';
        score = ++score;
        // cscore = 0;
        return ('You Win! Rock smashes scissors.');
    } else if (player == 'Scissors' && computer == 'Scissors') {
        text = 'It\s a Tie';
        // score = null;
        // cscore = null;
        return ('It\s a Tie');
    } else if (player == 'Scissors' && computer == 'Rock') {
        text = 'You Lose! Rock Smashes Scissors';
        // score = 0;
        cscore = ++cscore;
        return ('You Lose! Rock Smashes Scissors');
    } else if (player == 'Scissors' && computer == 'Paper') {
        text = 'You Win! Scissors Cuts Paper';
        score = ++score;
        // cscore = 0;
        return ('You Win! Scissors Cuts Paper');
    } else if (player == 'Paper' && computer == 'Paper') {
        text = 'it\'s a Tie!';
        // score = null;
        // cscore = null;
        return ('it\'s a Tie!');
    } else if (player == 'Paper' && computer == 'Scissors') {
        text = 'You Lose! Scissors cuts paper';
        // score = 0;
        cscore = ++cscore;
        return ('You Lose! Scissors cuts paper');
    } else if (player == 'Paper' && computer == 'Rock') {
        text = 'You Win! Paper you come again!';
        score = ++score;
        // cscore = 0;
        return ('You Win! Paper you come again!');
    }
}



let game = () => {
        const scores = document.querySelector(".player");
        const Computerscore = document.querySelector(".computer");
        const note = document.querySelector('.note');
        const rock = document.querySelector("#rock");
        const paper = document.querySelector("#paper");
        const scissors = document.querySelector("#scissors");
        rock.addEventListener('click', () => {
            const computerSelection = computerPlay();
            console.log(play('Rock', computerSelection));
            note.textContent = text;
            
            scores.textContent = score;
            Computerscore.textContent = cscore;

            if (score === 5) {
                note.textContent = "You have saved the World \n The game will reset in 5secons";
                setTimeout("location.reload(true);", 5000)
            } else if (cscore === 5) {
                setTimeout("location.reload(true);", 5000)
                note.textContent = "You have lost the battle against computer! Who will save us Now!!! \n The game will reset in 5secons";
            }
            
        });
        paper.addEventListener('click', () => {
            const computerSelection = computerPlay();
            console.log(play('Paper', computerSelection));
            note.textContent = text;

            scores.textContent = score;
            Computerscore.textContent = cscore;

            if (score === 5) {
                note.textContent = "You have saved the World \n The game will reset in 5secons";
                setTimeout("location.reload(true);", 5000)
            } else if (cscore === 5) {
                setTimeout("location.reload(true);", 5000)
                note.textContent = "You have lost the battle against computer! Who will save us Now!!! \n The game will reset in 5secons";
            }
        });
        scissors.addEventListener('click', () => {
            const computerSelection = computerPlay();
            console.log(play('Scissors', computerSelection));
            note.textContent = text;

            scores.textContent = score;
            Computerscore.textContent = cscore;

            if (score === 5) {
                note.textContent = "You have saved the World \n The game will reset in 5secons";
                setTimeout("location.reload(true);", 5000)
            } else if (cscore === 5) {
                setTimeout("location.reload(true);", 5000)
                note.textContent = "You have lost the battle against computer! Who will save us Now!!! \n The game will reset in 5secons";
            }
        });
        
        // const playerSeleciton = window.prompt('Enter Value')
        

};

game();