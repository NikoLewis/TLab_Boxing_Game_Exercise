let player1 = { name:'Player 1', health: 100, playerKnockedOut: false};
let player2 = { name:'Player 2', health: 100, playerKnockedOut: false};
let currentPlayer = player1;
let displayedText;



// 

    document.addEventListener('DOMContentLoaded', function(displayedText) {
        // Your code that uses document.getElementById() goes here
        displayedText = document.getElementById('boxing-ring');
        if (displayedText) {
          // Do something with the element
          displayedText.textContent = `${player1.health}`;

          //Function to generate random damage
function generateDamage() {
    return Math.floor(Math.random() * 10) + 1; // Damage ranges from 1 to 10
    }

    // Function to apply damage to the opponent
function applyDamage(opponent, damage) {
    if ( damage < 6 /* FILL CONDITIONAL HERE */) {
    console.log(`${currentPlayer.name} lands a basic hit on ${opponent.name}!`);
    displayedText.textContent += `${currentPlayer.name} lands a basic hit on ${opponent.name}!`;
    } else if (damage >= 6 && damage <= 9 /* FILL CONDITIONAL HERE */) {
    console.log(`${currentPlayer.name} lands a critical hit on ${opponent.name}!`);
    displayedText.textContent += `${currentPlayer.name} lands a critical hit on ${opponent.name}!`;
    } else {
    console.log(`${currentPlayer.name} lands a KNOCKOUT on ${opponent.name}!🥊`);
    displayedText.textContent += `${currentPlayer.name} lands a KNOCKOUT on ${opponent.name}!🥊`
    }
    opponent.health -= damage;
    if (opponent.health <= 0 || damage >= 10/* FILL CONDITIONAL HERE */) {
    // Ensure health doesn't go below 0 and automatic KO
    opponent.health = 0;
    }
    console.log(`${opponent.name}'s health is now ${opponent.health}.`);
    }

    // Function to check if the game is over
function checkKnockout(opponent) {
    if ( opponent.health <= 0 /* fill conditional here */) {
    console.log(`${opponent.name} has been knocked out!`);
    console.log(`${currentPlayer.name} is the WINNER! 🏆`);
    return true; // Game over
    }
    return false;
    }
    
    // Function to switch turns
function switchTurns() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    console.log(`It's now ${currentPlayer.name}'s turn.`);
    }
    // Main gameplay function
    function playTurn() {
    let opponent;
    if (currentPlayer === player1) {
    opponent = player2;
    } else {
    opponent = player1;
    }
    const damage = generateDamage();
    applyDamage(opponent, damage);
    if (checkKnockout(opponent)) {
    return false; // Stop the game if there's a knockout
    }
    switchTurns();
    return true; // Continue the game
    }
    // Game loop
    function startGame() {
      let greeting = "Starting the Boxing Game!";
      console.log(greeting);
      console.log('we are within the start game function');
      displayedText.textContent = `${greeting}`;
      console.log(`${player1.name} vs ${player2.name}`);
      while (player1.health > 0 && player2.health > 0) {
      if (!playTurn()) break; // Stop the game if there's a knockout
    }
    console.log("Game Over. Thanks for playing!");
    }
    // Start the game
    startGame();
        } else {
          console.error('Element with ID "yourElementId" not found.');
        }
      });
    
    
    
    