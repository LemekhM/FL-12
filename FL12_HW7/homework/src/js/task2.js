let message = confirm('Do you want to play a game?');
let randomNum;
let chooseNum;
let prize;
let totalPrize = 0;
let continueGame;
let playGame;
let i;
let max = 9;
for ( i = 1; i !== 0; i++) {
    if (message === false) {
        alert('You did not become a billionaire, but can.');
        i = 0;
    } else {
        randomNum = Math.floor(Math.random() * Math.floor(max));
        chooseNum = +prompt('Choose a roulette pocket number from 0 to '+
        (max - 1)+' \nAttempt left: 3 \nTotal prize: '+
        totalPrize+'$ \nPosible prize on current attempt: '+
        100 * i+'$');
        if (chooseNum === randomNum) {
            prize = 100 * i;
            continueGame = confirm('Congratulation, you won!   Your prize is: '+
            (prize + totalPrize)+' $. Do you want to continue?');
        } else {
            chooseNum = +prompt('Choose a roulette pocket number from 0 to '+
            (max - 1) +' \nAttempt left: 2 \nTotal prize: '+
            totalPrize+'$ \nPosible prize on current attempt: '+
            50 * i +'$')
            if (chooseNum === randomNum) {
                prize = 50 * i;
                continueGame = confirm('Congratulation, you won!   Your prize is: '+
                (prize + totalPrize)+' $. Do you want to continue?');
            } else {
                chooseNum = +prompt('Choose a roulette pocket number from 0 to '+
                (max - 1) +' \n Attempt left: 1 \nTotal prize: '+
                totalPrize+'$ \nPosible prize on current attempt: '+
                25 * i +'$')
                if (chooseNum === randomNum) {
                    prize = 25 * i;
                    continueGame = confirm('Congratulation, you won!   Your prize is: '+
                    (prize + totalPrize)+' $. Do you want to continue?');
                } else {
                    prize = 0;
                }
            }
        }
    }
    
    totalPrize = totalPrize + prize;
    if (continueGame === false || continueGame === ''|| chooseNum !== randomNum) {
        alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $')
        playGame = confirm('Do you want to play again')
        if(playGame === false) { 
            i = -1; 
        } else {
            i = 0;
            max = 9;
            totalPrize = 0;
        }
    } else {
        i = i * 2 - 1;
        max = max + 4;
    }  
}

