const fields = document.querySelectorAll('.field');
var currentPlayer = "X",
	currentRow = 0,
	currentCol = 0,
	isEnd = false,
 	moves = 0,
 	board = [
		["","",""],
		["","",""],
		["","",""]
	];


/**
* Main function of the game
*/
function game() {
	var field = this;
	if (field.classList.contains('empty') && !isEnd) {
		field.classList.remove('empty');
		markField(field);
		var win = checkWinner(field);
		displayWinner(win);
		changeGameState();
		checkEndOfGame();
	}
}


/**
* Function marks "X" or "O" on board in HTML and in board array
*
* @param field
*/
function markField(field) {
	var span = field.childNodes;
	span[0].innerText = currentPlayer;

	var dataIndex = field.getAttribute('data-index'),
		row = dataIndex.slice(0,1),
		col = dataIndex.slice(2,3);

	currentRow = parseInt(row) - 1;
	currentCol = parseInt(col) - 1;

	board[currentRow][currentCol] = currentPlayer;
}


/**
* Function checks if player won the game
*
* @param field
*/
function checkWinner(field) {
	if ( checkVertically(field) ) return 1;
	if ( checkHorizontally(field) ) return 2;
	if ( checkDiagonalDescending(field) ) return 3;
	if ( checkDiagonalAscending(field) ) return 4;

	return 0;
}


/**
* Function checks if there are three "X" or three "O" in column
*
* @param field
*/
function checkVertically(field) {
	var marked = 0;

	for( i = 0; i < 3; i++ ) {
		if ( board[i][currentCol] == currentPlayer ) marked++;
	}

	if (marked == 3) return true;
	else return false;
}


/**
* Function checks if there are three "X" or three "O" in row
*
* @param field
*/
function checkHorizontally(field) {
	var marked = 0;

	for( i = 0; i < 3; i++ ) {
		if ( board[currentRow][i] == currentPlayer ) marked++;
	}

	if (marked == 3) return true;
	else return false;
}


/**
* Function checks if there are three "X" or three "O" in diagonal
*
* @param field
*/
function checkDiagonalDescending(field) {
	var marked = 0;

	if (currentRow == currentCol) {
		for( i = 0; i < 3; i++ ) {
			if ( board[i][i] == currentPlayer ) marked++;
		}
	}

	if (marked == 3) return true;
	else return false;
}


/**
* Function checks if there are three "X" or three "O" in diagonal
*
* @param field
*/
function checkDiagonalAscending(field) {
	var marked = 0;

	if (currentRow == 0 && currentCol == 2 || 
		currentRow == 1 && currentCol == 1 || 
		currentRow == 2 && currentCol == 0) {
		for( i = 0; i < 3; i++ ) {
			if ( board[i][2 - i] == currentPlayer ) marked++;
		}
	}

	if (marked == 3) return true;
	else return false;
}


/**
* Function displays line when player win the game
*
* @param win
*/
function displayWinner(win) {
	var line = document.getElementById('line')
	switch(win) {
		case 1:
			line.classList.add('vertical');
			line.classList.add('vertical-' + (currentCol+1));
			isEnd = true;
			break;
		case 2:
			line.classList.add('horizontal');
			line.classList.add('horizontal-' + (currentRow+1));
			isEnd = true;
			break;
		case 3:
			line.classList.add('diagonal-d');
			isEnd = true;
			break;	
		case 4:
			line.classList.add('diagonal-a');
			isEnd = true;
			break;
	}
}


/**
* Function changes current player and increment moves
*/
function changeGameState() {
	moves++;

	if (moves == 9) isEnd = true;

	if (!isEnd) currentPlayer = (currentPlayer === "X" ? "O" : "X");
}


/**
* Function displays info when user win the game
*/
function checkEndOfGame() {
	if (isEnd) {
		document.getElementById('info').innerText = "Player " + currentPlayer + " won!";
	}
}



fields.forEach(field => field.addEventListener('click', game));