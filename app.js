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
        return ('It\s a Tie!');
    } else if(player == 'Rock' && computer == 'Paper') {
        return ('You Lose! Papper covers Rock.');
    } else if (player == 'Rock' && computer == 'Scissors') {
        return ('You Win! Rock smashes scissors.');
    } else if (player == 'Scissors' && computer == 'Scissors') {
        return ('It\s a Tie');
    } else if (player == 'Scissors' && computer == 'Rock') {
        return ('You Lose! Rock Smashes Scissors');
    } else if (player == 'Scissors' && computer == 'Paper') {
        return ('You Win! Scissors Cuts Paper');
    } else if (player == 'Paper' && computer == 'Paper') {
        return ('it\'s a Tie!');
    } else if (player == 'Paper' && computer == 'Scissors') {
        return ('You Lose! Scissors cuts paper');
    } else if (player == 'Paper' && computer == 'Rock') {
        return ('You Win! Paper you come again!');
    }
    

}



let game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSeleciton = prompt('Enter Value')
        const computerSelection = computerPlay();
        console.log(play(playerSeleciton, computerSelection));
        
    }
};

game();