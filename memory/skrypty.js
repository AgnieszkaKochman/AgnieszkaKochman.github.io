var tiles = [];
var clickedTiles = [];
var canClick = true;
var numberOfTiles = 20;
var numberOfFoundTiles = 0;
var tilesElements;


prepareBoard();


/**
* Prepare board with images in random order
*/
function prepareBoard() {
	for (i = 0; i < numberOfTiles; i++) {
		tiles.push(Math.floor(i/2));
	}

	for (i = numberOfTiles - 1; i > 0; i--) {
		var tmp1 = Math.floor(Math.random() * i);
		var tmp2 = tiles[i];
		tiles[i] = tiles[tmp1];
		tiles[tmp1] = tmp2;
	}

	displayTiles();

	tilesElements = document.querySelectorAll('.image');
	tilesElements.forEach(tile => tile.addEventListener('click', tileClick));
	tilesElements.forEach(tile => tile.addEventListener('touchstart', tileClick));
}


function displayTiles() {
	for (i = 0; i < numberOfTiles; i++) {
		var tile = document.createElement('div');
		tile.classList.add('image');
		tile.setAttribute('data-index', tiles[i]);

		var image = document.createElement('img');
		image.src = "img/0" + tiles[i] + ".png";
		tile.appendChild(image);

		document.getElementById('board').appendChild(tile);
	}
}


function tileClick() {
	if (!this.classList.contains('found') && canClick) {
		clickedTiles.push(this);
		this.childNodes[0].style.display = 'block';

		if (clickedTiles.length == 2) {
			canClick = false;
			checkIfTilesMatch();
		}
	}
}


function checkIfTilesMatch() {
	var dataIndex1 = clickedTiles[0].getAttribute('data-index');
	var dataIndex2 = clickedTiles[1].getAttribute('data-index');

	if (dataIndex1 == dataIndex2) {
		window.setTimeout( function() {
			removeMatchedTiles();
			resetClickedTiles();
			numberOfFoundTiles += 2;
			checkEndOfGame();
			canClick = true;
		}, 500 );
	}
	else {
		window.setTimeout( function() {
			hideTiles();
			resetClickedTiles();
			canClick = true;
		}, 750 );
	}
}


function removeMatchedTiles() {
	clickedTiles[0].style.opacity = '0';
	clickedTiles[1].style.opacity = '0';
	clickedTiles[0].classList.add('found');
	clickedTiles[1].classList.add('found');
}


function hideTiles() {
	clickedTiles[0].childNodes[0].style.display = 'none';
	clickedTiles[1].childNodes[0].style.display = 'none';
}


function resetClickedTiles() {
	clickedTiles = [];
}


function checkEndOfGame() {
	if (numberOfFoundTiles == numberOfTiles) {
		document.getElementById('board').innerHTML = "<h2>Game over!</h2>";
	}
}