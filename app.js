// Table of contents - Code flow order
// 1. Play Function
    //--computer choice
    //--playerChoice
    // return winner and activate the next function
// 2. drawWinner
    //take in the value from play function
        //set alert = winner is ${winner}
//3. display in the computer box the computers choice (rock, paper, or scissors)

function play(playerChoice) {
    
    let computerChoice = (Math.floor(Math.random() * 3));
    console.log(computerChoice)
    console.log(playerChoice)
    if (playerChoice == computerChoice) {
        alert("Its a TIE!!!")
        return "TIE"
    } else if
        (playerChoice > computerChoice) {
            alert("Winner is Player")
            return "Player WINS!"
        }
    else {
        playerChoice < computerChoice
        alert("Winner is Computer")
        return "Computer WINS!"
    }
}
