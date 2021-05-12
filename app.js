// Table of contents - Code flow order
// 1. Play Function
    //--computer choice
    //--playerChoice
    // return winner and activate the next function
// 2. drawWinner
    //take in the value from play function
        //set alert = winner is ${winner}






// **TIP:** Before writing code, it may be beneficial to write down on a scrap of paper the logic that will be used
// to determine a winner. Writing in plain english before writing in code is a good idea!!!

// function goButton() {
    // Try and get this to display the 3 center cards -
    // so the cards will need to start hidden- and the button will remove the hidden element
//  console.log(event)
    // const imgElem = event.target
    // imgElem.classList.add('spin')
// }

function play(playerChoice) {
    
    let computerChoice = (Math.floor(Math.random() * 3));
    // console.log(computerChoice)
    // console.log(playerChoice)
    //I console loged all the returns and they are working, so how to assign the output to a value then use that value in the next function
    if (playerChoice == computerChoice) {
        return "TIE"
    } else if
        (playerChoice > computerChoice)
        return "Player WINS!"
    else {
        playerChoice < computerChoice
        return "Computer WINS!"
    }
    //How do i assign the return to a value 'Winner'??
    
}

function drawWinner(winner) {
    if (winner == computerChoice) {
        alert("Winner is Computer")
    } else {
        alert("Winner is Player")
    }
}



