// // JS for rockPaper.html

// // console.debug('Hello world');  
// const compWin = 'Computer wins. '
// const humanWin = 'Human Wins. '
// const tie   = 'It is a tie. Both chose '

// const paperWin = 'Paper covers rock.'
// const rockWin = 'Rock crushes scissors.'
// const scissorsWin = 'Scissors cuts the paper. '

// const erroMsg = 'Please select from Rock, Paper or Scissors.'


// function computerPlay(){    //This function is to sim
//     let randNum = Math.floor(Math.random() * 3)+1;      //create a random number between 1 and 3 (both inclusive)
//     // randNum==1 ? return 'Rock';

//     if (randNum==1){
//         return 'Rock';
//     }
//     else if(randNum==2){
//         return 'Paper';
//     }
//     else if(randNum==3){
//         return 'Scissors';
//     }
// }

// function singleGame(ComputerChoice, humanChoice){ 
//     //This function will return -1 if computer wins, 0 if it is a tie and if human wins
//     //-2 is reserved for error status

//     let winStatus = 0;
//     ComputerChoice = ComputerChoice.toUpperCase();
//     humanChoice = humanChoice.toUpperCase();
    
//     if (ComputerChoice=='ROCK'){
//         if(humanChoice=='ROCK'){    //tie
//             console.debug(tie+ComputerChoice.toLowerCase());
//             winStatus = 0;
//         }
//         else if(humanChoice=='PAPER'){    //Human wins
//             console.debug(humanWin + paperWin);
//             winStatus = 1;
//         }
//         else if(humanChoice=='SCISSORS'){    //Computer wins
//             console.debug(compWin + rockWin);
//             winStatus = -1;
//         }
//         else{
//             console.debug(erroMsg);
//             winStatus = -2;
//         }
//     }
//     else if(ComputerChoice=='PAPER'){
//         if(humanChoice=='ROCK'){    //tie
//             console.debug(compWin + paperWin);
//             winStatus = -1;
//         }
//         else if(humanChoice=='PAPER'){    //Human wins
//             console.debug(tie+ComputerChoice.toLowerCase());
//             winStatus = 0;
//         }
//         else if(humanChoice=='SCISSORS'){    //Computer wins
//             console.debug(humanWin + scissorsWin);
//             winStatus = 1;
//         }
//         else{
//             console.debug(erroMsg);
//             winStatus = -2;
//         }

//     }
//     else if(ComputerChoice=='SCISSORS'){
//         if(humanChoice=='ROCK'){    //tie
//             console.debug(humanWin + rockWin);
//             winStatus = 1;
//         }
//         else if(humanChoice=='PAPER'){    //Human wins
//             console.debug(compWin + scissorsWin);
//             winStatus = -1;
//         }
//         else if(humanChoice=='SCISSORS'){    //Computer wins
//             console.debug(tie+ComputerChoice.toLowerCase());
//             winStatus = 0;
//         }
//         else{
//             console.debug(erroMsg);
//             winStatus = -2;
//         }
//     }
//     return winStatus;
// }


// function game(num){
//     let computerWins = 0;
//     let humanWins = 0;
//     let ties = 0;
//     let errors = 0;
//     let outcome = 0;

//     for (let i=1; i<=num; i++){
//         let userInput = prompt('Please enter rock paper or scissors');
//         outcome = singleGame(computerPlay(), userInput); //directly calling a funtion in the function parameters
//         if (outcome == -1){
//             computerWins++;
//         }
//         else if (outcome == 0){
//             ties++;
//         }
//         else if (outcome == 1){
//             humanWins++;
//         }
//         else if (outcome == -2){
//             errors++;
//         }
//     }

//     console.debug('Human Wins: ' + humanWins);
//     console.debug('Computer Wins: ' + computerWins); 
//     console.debug('Ties: ' + ties); 


//     if (humanWins>computerWins){
//         console.debug('Human wins!!');
//     }
//     else if (humanWins<computerWins){
//         console.debug('Computer wins!!');
//     }
//     else if (humanWins==computerWins){
//         console.debug('It is a tie!!')
//     }
// }


// game(5);