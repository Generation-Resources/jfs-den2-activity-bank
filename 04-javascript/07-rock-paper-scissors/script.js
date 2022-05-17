// First hint
let wins = 0;
let losses = 0;
let ties = 0;

const getUserChoice = function(){
    let userChoice = prompt("please choose 'r' for rock, 'p' for paper, or 's' for scissors");
    return userChoice;
}



// Second hint
const getComputerChoice = function(){
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if(randomNum === 0){
        computerChoice = "r";
    } else if (randomNum === 1){
        computerChoice = "s"
    } else if (randomNum === 2){
        computerChoice = "p"
    }
    return computerChoice;
}


// third hint
const playGame = function(){
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    if ((userChoice === "r" && computerChoice === "s") ||
            (userChoice === "s" && computerChoice === "p") || 
            (userChoice === "p" && computerChoice === "r")) {
            wins++;
            alert("You've won " + wins + " time(s)!");
          } else if (userChoice === computerChoice) {
            ties++;
            alert("You've tied " + ties + " time(s).");
          } else {
            losses++;
            alert("You've lost " + losses + " time(s).");
          }

    let playAgain = confirm("Do you want to play again?");

    if(playAgain === true){
        playGame();
    }
}

playGame();




