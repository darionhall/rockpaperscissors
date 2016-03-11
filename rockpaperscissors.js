
  function getInput() {
  	console.log("Please choose either 'rock', 'paper', or 'scissors'.");
  	return prompt ();
  }
  function randomPlay () {

  	var getMove;

  	while (move === null) {
  		getInput();
  	}
  	if(move !== '') {
  		getMove = move;
  	}
  	return getMove;
  }

  function getComputerMove(move) {

  	var compMove;

  	if(move !== '') {
  		compMove = move;
  	} else {
  		randomPlay();
  	}
  	return compMove;

  }

  function getWinner(playerMove,computerMove) {
  	var winner;
  	var x = 'rock';
  	var y = 'paper';
  	var z = 'scissors';
  	console.log('player move =' + playerMove + '; computer move = ' + computerMove);
  	if((playerMove == z && computerMove == y) || (playerMove == x && computerMove == z) || (playerMove == y && computerMove == x)) {
  	winner = 'player';
  	} else if ((computerMove == z && playerMove == y) || (computerMove == x && playerMove == z) || (computerMove == y && playerMove == x)) {
  	winner = 'computer';
	} else if (playerMove === computerMove) {
		winner = 'tie';
  	}
  	return winner;
  }

  function startGame() {
  	console.log('How many Wins to finish?');
  	playto(prompt());
  }

  function playto(5) {
  	console.log("Let's play Rock, Paper, Scissors");
  	var playerWins = 0;
  	var computerWins = 0;

  }

  	do {
  		console.log('player wins = ' + playerWins + '; computer wins = ' + computerWins);

  		var userInput = getInput();
  		var playerMove = getPlayerMove(userInput);
  		var computerMove = getComputerMove(randomPlay());
  		var winner = getWinner(playerMove, computerMove);

  		if(winner === 'player') {
  			playerWins++;
  		} else if(winner === 'computer') {
  			computerWins++;
  		}
  	
  	} while(playersWins < numtimes && computerWIns < numtimes);

  	console.log('Game Over!');

  	if(playerWins > computerWins) {
  		console.log('WINNER!!!');
  	} else {
  		console.log('You lose');
  	}
  	return [playerWins, computerWins];
  }
  startGame();
  //playtoFive();
