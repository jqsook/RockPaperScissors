// Table of contents - Code flow order
// 1. Play Function
    //--playerChoice
    //--Error check?
    //
// 2.

// The function should accept a single argument that represent the players choice: "rock" "paper" or "scissors".

// ### Determine a Winner!

// We are now going to add logic to the `play function` that will determine who wins the game.
// This will require a you to use `if` `else` statements.

// **TIP:** Before writing code, it may be beneficial to write down on a scrap of paper the logic that will be used
// to determine a winner. Writing in plain english before writing in code is a good idea!!!

// let rock = 1;
// let paper = 2;
// let scissors = 3;
// let computerChoice = Math.random()*10 Need to see if this will return a whole number 0-1 && != 0 return false (meaning the number is negative)

function goButton() {
    // Try and get this to display the 3 center cards -
    // so the cards will need to start hidden- and the button will remove the hidden element
}

function play(playerChoice) {
    let computerChoice = Math.floor(Math.random() * 3);
    if (playerChoice == computerChoice) {
        return 'TIE'
    } else if
        (playerChoice > computerChoice)
        return 'Player WINS!'
    else {
        playerChoice < computerChoice
        return 'Computer WINS!'
    }
}




