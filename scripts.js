const debugging = (() => {
	function print(string) {
		console.log(string);
	}

	return { print };
})();

let exPhase = false;
let ohPhase = true;

const gameboard = (() => {
	const squareList = document.querySelectorAll(".square");
	function populateBoard(nodelist) {
		nodelist.forEach((element) =>

            // onclick version - can't get onclick to fall off
            element.onclick = () => {
                if (exPhase) {
                    if(!element.classList.contains("ohes-game-piece")){
                    element.classList.add("exes-game-piece")};
                    element.removeAttribute('onclick');
                } else if (ohPhase) {
                    if(!element.classList.contains("exes-game-piece")){
                    element.classList.add("ohes-game-piece")};
                    element.removeAttribute('onclick');
                }
                element.removeAttribute('onclick');
                gamelogic.checkMatch();
                gamestates.toggleState();
                // for debuggin -- DO NOT DELETE
                console.log(gamelogic.drawcount); 
                // console.log(`exPhase: ${exPhase}, ohPhase: ${ohPhase}`);
                
            }

		);
	}

	// clear the board
	const resetButton = document.querySelector("#reset-button");
	resetButton.addEventListener("click", (event) => clearBoard(squareList));
	
    // When in eventlistener mode, listeners are carried between rounds
    function clearBoard(nodelist) {
		nodelist.forEach((element) => element.classList.remove("exes-game-piece"));
		nodelist.forEach((element) => element.classList.remove("ohes-game-piece"));
		populateBoard(squareList);
		gamelogic.drawcount = 0;
		exPhase = false;
		ohPhase = true;
	}

	return { populateBoard, squareList, clearBoard, resetButton };
})();

const gamestates = (() => {
	
    
    const toggleState = () => {
		if (exPhase === true) {
			exPhase = false;
			ohPhase = true;
		} else if (ohPhase === true) {
			ohPhase = false;
			exPhase = true;
		}
	};

	return { toggleState };
})();

const gamelogic = (() => {
    let drawcount = 0;

	const checkMatch = () => {
		

        const square1 = document.querySelector(".square1");
		const square2 = document.querySelector(".square2");
		const square3 = document.querySelector(".square3");
		const square4 = document.querySelector(".square4");
		const square5 = document.querySelector(".square5");
		const square6 = document.querySelector(".square6");
		const square7 = document.querySelector(".square7");
		const square8 = document.querySelector(".square8");
		const square9 = document.querySelector(".square9");
        
        const allthesquares = [ square1, square2, square3, 
                                        square4, square5, square6, 
                                        square7, square8, square9]
		const row1 = [square1, square2, square3];
		const row2 = [square4, square5, square6];
		const row3 = [square7, square8, square9];

		const exmarker = "exes-game-piece";
		const exwins = "X's win!";
		const ohmarker = "ohes-game-piece";
		const ohwins = "O's win!";

		// ex wins
		function doesExWin() {
			if (row1[0].classList.contains(exmarker)) {
				if (row1[1].classList.contains(exmarker)) {
					if (row1[2].classList.contains(exmarker)) {
						scoresystem.exscore.innerHTML =
							Number(scoresystem.exscore.innerHTML) + 1;
						alert(exwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row2[0].classList.contains(exmarker)) {
				if (row2[1].classList.contains(exmarker)) {
					if (row2[2].classList.contains(exmarker)) {
						scoresystem.exscore.innerHTML =
							Number(scoresystem.exscore.innerHTML) + 1;
						alert(exwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row3[0].classList.contains(exmarker)) {
				if (row3[1].classList.contains(exmarker)) {
					if (row3[2].classList.contains(exmarker)) {
						scoresystem.exscore.innerHTML =
							Number(scoresystem.exscore.innerHTML) + 1;
						alert(exwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row1[0].classList.contains(exmarker)) {
				if (row2[0].classList.contains(exmarker)) {
					if (row3[0].classList.contains(exmarker)) {
						scoresystem.exscore.innerHTML =
							Number(scoresystem.exscore.innerHTML) + 1;
						alert(exwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row1[1].classList.contains(exmarker)) {
				if (row2[1].classList.contains(exmarker)) {
					if (row3[1].classList.contains(exmarker)) {
						scoresystem.exscore.innerHTML =
							Number(scoresystem.exscore.innerHTML) + 1;
						alert(exwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row1[2].classList.contains(exmarker)) {
				if (row2[2].classList.contains(exmarker)) {
					if (row3[2].classList.contains(exmarker)) {
						scoresystem.exscore.innerHTML =
							Number(scoresystem.exscore.innerHTML) + 1;
						alert(exwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row1[0].classList.contains(exmarker)) {
				if (row2[1].classList.contains(exmarker)) {
					if (row3[2].classList.contains(exmarker)) {
						scoresystem.exscore.innerHTML =
							Number(scoresystem.exscore.innerHTML) + 1;
						alert(exwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row1[2].classList.contains(exmarker)) {
				if (row2[1].classList.contains(exmarker)) {
					if (row3[0].classList.contains(exmarker)) {
						scoresystem.exscore.innerHTML =
							Number(scoresystem.exscore.innerHTML) + 1;
						alert(exwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
		}

		// oh wins
		function doesOhWin() {
			if (row1[0].classList.contains(ohmarker)) {
				if (row1[1].classList.contains(ohmarker)) {
					if (row1[2].classList.contains(ohmarker)) {
						scoresystem.ohscore.innerHTML =
							Number(scoresystem.ohscore.innerHTML) + 1;
						alert(ohwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row2[0].classList.contains(ohmarker)) {
				if (row2[1].classList.contains(ohmarker)) {
					if (row2[2].classList.contains(ohmarker)) {
						scoresystem.ohscore.innerHTML =
							Number(scoresystem.ohscore.innerHTML) + 1;
						alert(ohwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row3[0].classList.contains(ohmarker)) {
				if (row3[1].classList.contains(ohmarker)) {
					if (row3[2].classList.contains(ohmarker)) {
						scoresystem.ohscore.innerHTML =
							Number(scoresystem.ohscore.innerHTML) + 1;
						alert(ohwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row1[0].classList.contains(ohmarker)) {
				if (row2[0].classList.contains(ohmarker)) {
					if (row3[0].classList.contains(ohmarker)) {
						scoresystem.ohscore.innerHTML =
							Number(scoresystem.ohscore.innerHTML) + 1;
						alert(ohwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row1[1].classList.contains(ohmarker)) {
				if (row2[1].classList.contains(ohmarker)) {
					if (row3[1].classList.contains(ohmarker)) {
						scoresystem.ohscore.innerHTML =
							Number(scoresystem.ohscore.innerHTML) + 1;
						alert(ohwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row1[2].classList.contains(ohmarker)) {
				if (row2[2].classList.contains(ohmarker)) {
					if (row3[2].classList.contains(ohmarker)) {
						scoresystem.ohscore.innerHTML =
							Number(scoresystem.ohscore.innerHTML) + 1;
						alert(ohwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row1[0].classList.contains(ohmarker)) {
				if (row2[1].classList.contains(ohmarker)) {
					if (row3[2].classList.contains(ohmarker)) {
						scoresystem.ohscore.innerHTML =
							Number(scoresystem.ohscore.innerHTML) + 1;
						alert(ohwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
			if (row1[2].classList.contains(ohmarker)) {
				if (row2[1].classList.contains(ohmarker)) {
					if (row3[0].classList.contains(ohmarker)) {
						scoresystem.ohscore.innerHTML =
							Number(scoresystem.ohscore.innerHTML) + 1;
						alert(ohwins);
						gameboard.clearBoard(gameboard.squareList);
					}
				}
			}
		}

		// draw
		function isItADraw() {
			function drawTally(square){
                if(square.classList.contains('exes-game-piece') || square.classList.contains('ohes-game-piece')){
                    gamelogic.drawcount += 1;
                }
            }
            allthesquares.forEach(drawTally)
            if (gamelogic.drawcount >= 45) {
				alert("Draw");
				gameboard.clearBoard(gameboard.squareList);
				gamelogic.drawcount = 0;
			}
		}

		doesExWin();
		doesOhWin();
		isItADraw()
	};

	return { checkMatch, drawcount };
})();

const scoresystem = (() => {
	const exscore = document.querySelector(".ex-score");
	const ohscore = document.querySelector(".oh-score");

	return { exscore, ohscore };
})();

gameboard.populateBoard(gameboard.squareList);