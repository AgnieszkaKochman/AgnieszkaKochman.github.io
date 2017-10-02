const alphabetArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const wordsArray = [
	{ word: 'zebra', category: 'Animals', hint: 'Horse in stripes' },
	{ word: 'giraffe', category: 'Animals', hint: 'Animal with long neck' },
	{ word: 'rabbit', category: 'Animals', hint: 'Little animal with long ears' },
	{ word: 'Greece', category: 'European countries', hint: 'Historically also known as Hellas' },
	{ word: 'Spain', category: 'European countries', hint: 'Country between Portugal and France' }
];
var selectedWordObject;
var lives = 11;
var lettersMatched = 0;


/**
* Function displays letters as buttons list
*/
function displayAlphabet() {
	var alphabetList = document.getElementById('alphabet');
	var alphabetButtons = '';

	for (let i = 0; i < alphabetArray.length; i++) {
		alphabetButtons += '<li><button class="letter" data-letter-number="' + i + '">' + alphabetArray[i] + '</button></li>';
	}

	alphabetList.innerHTML = alphabetButtons;
}


/**
* Function displays list of empty places for letters of word
*/
function displayWord() {
	var lettersList = document.getElementById('word');
	var lettersElements = '';

	getWord();

	for (let i = 0; i < selectedWordObject.word.length; i++) {
		lettersElements += '<li class="word-letter">?</li>';
	}

	lettersList.innerHTML = lettersElements;
}


/**
* Function gets random word object from words array and displays word category
*/
function getWord() {
	var wordNumber = Math.floor(Math.random() * wordsArray.length);
	selectedWordObject = wordsArray[wordNumber];

	document.getElementById('category').innerHTML = "Category: " + selectedWordObject.category;
}


/**
* Finction dosplays hint for word
*/
function getHint() {
	document.getElementById('hint').innerHTML = selectedWordObject.hint;
	wrongMovement();
}


/**
* Function is called when the letter button is clicked
*/
function letterClicked(e) {
	if (this.classList.contains('disabled')) return;
	this.classList.add('disabled');
	var letterNumber = this.getAttribute('data-letter-number');
	var letter = alphabetArray[letterNumber].toLowerCase();
	var word = selectedWordObject.word.toLowerCase();
	var lettersElements = document.querySelectorAll('.word-letter');
	var lettersMatch = word.split(letter).length - 1;

	if (lettersMatch > 0) {
		correctMovement(word, lettersMatch, letter, lettersElements);
	} else {
		wrongMovement();
	}
}


/**
* Function is called when user selects correct letter
*/
function correctMovement(word, lettersMatch, letter, lettersElements) {
	var currentIndex = 0;
	var cuttedWord = 0;

	while (lettersMatch > 0) {
		let newWord = word.slice(currentIndex,word.length);
		let letterIndex = newWord.indexOf(letter);
		cuttedWord += word.slice(0,currentIndex);

		lettersElements[cuttedWord.length + letterIndex - 1].innerHTML = letter;

		currentIndex = letterIndex + 1;
		lettersMatch--;
		lettersMatched++;
	}

	if (lettersMatched == word.length) {
		document.getElementById('message').innerHTML = "You won!";
		document.querySelectorAll('.letter').forEach(letter => letter.classList.add('disabled'));
	}
}


/**
* Function is called when user selects wrong letter
*/
function wrongMovement() {
	document.querySelector('.element-' + lives).style.opacity = 1;

	lives--;
	document.getElementById('lives').innerHTML = lives;

	if (lives === 0) {
		document.getElementById('message').innerHTML = "Game over";
		document.querySelectorAll('.letter').forEach(letter => letter.classList.add('disabled'));
	}
}


/**
* Function resets game settings
*/
function reset() {
	lives = 11;
	lettersMatched = 0;
	document.querySelectorAll('.element').forEach(element => element.style.opacity = 0);
	document.getElementById('hint').innerHTML = '<button class="button" id="hint-button">Get hint</button>';
	document.getElementById('message').innerHTML = 'You have <span id="lives">11</span> lives';
	play();
}


/**
* Function starts the game
*/
function play() {
	displayAlphabet();
	displayWord();
	var letterButtons = document.querySelectorAll('.letter');
	letterButtons.forEach(letter => letter.addEventListener('click', letterClicked));
	document.getElementById('hint-button').addEventListener('click', getHint);
	document.getElementById('reset').addEventListener('click', reset);
}


play();