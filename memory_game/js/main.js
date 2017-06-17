console.log("poop");
//setup by creating card elements
	function createBoard(){
		for (i=0;i<8;i++){
			var newImgItem=document.createElement('img');
			newImgItem.setAttribute('src','images/back.png');
			newImgItem.setAttribute('id',i);
			newImgItem.addEventListener('click', uncoverCard);
			newImgItem.addEventListener('click', function delayed(){
				setTimeout(checkcards, 1000);
			});
			document.getElementById('board').appendChild(newImgItem)
		}
	}

	createBoard();
	
//create card obj
	var cards=[
		{value:"queen",
		img: "images/queen-of-diamonds.png"},
		{value:"queen",
		img: "images/queen-of-hearts.png"},
		{value:"king",
		img: "images/king-of-diamonds.png"},
		{value:"king",
		img: "images/king-of-hearts.png"},
		{value:"queen",
		img: "images/queen-of-diamonds.png"},
		{value:"queen",
		img: "images/queen-of-hearts.png"},
		{value:"king",
		img: "images/king-of-diamonds.png"},
		{value:"king",
		img: "images/king-of-hearts.png"},
	]
	
//to uncover cards
	var testArr=[]; //to store value of this round of cards clicked, resets to 0 once 2 cards clicked. used to test match
	var clickedId=[]; // to store id of this round of cards clicked???
	var wonArr=[]; //to store id of cards clicked, used to test if all cards have been won for entire game

	function uncoverCard(){
		if (wonArr.indexOf(this.getAttribute('id'))!==-1){alert("already clicked")}
			else {
			document.getElementById(this.getAttribute('id')).setAttribute("src",cards[this.getAttribute('id')].img);
			testArr.push(cards[this.getAttribute('id')].value);
			clickedId.push(this.getAttribute('id'));
	}}

//to test win lose
	function checkcards(){
	if (testArr.length === 2) {
		if (testArr[0]===testArr[1]){
			wonArr.push(clickedId[0],clickedId[1]);
			console.log(wonArr);
		}
		else {document.getElementById(clickedId[0]).setAttribute('src','images/back.png');
		document.getElementById(clickedId[1]).setAttribute('src','images/back.png')}
	testArr.length = 0;
	clickedId.length = 0;
	}
	if (wonArr.length==cards.length){alert("GAME WON!")}
	}

	
	//how to get 2 functions to run on an event listerner
	//fix the data id thing
	//use constructor to create infinite objects???
	// create reload button

