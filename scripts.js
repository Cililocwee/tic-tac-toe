const debugging = (() => {
    function print(string){
        console.log(string);}

    return {print}    
})();

let gameplaying = true;
let exPhase = false;
let ohPhase = true;

const gameboard = (() => {
    const squareList = document.querySelectorAll('.square');
    function populateBoard(nodelist){
        nodelist.forEach(element =>
            element.addEventListener('click', () => {
                if (exPhase){
                element.classList.add('exes-game-piece')
            } else if (ohPhase){
                element.classList.add('ohes-game-piece')
            };
            })
            )
    }
    /*
    squareList.forEach(element =>
        element.addEventListener('click', () => {
            if (exPhase){
            element.classList.add('exes-game-piece')
        } else if (ohPhase){
            element.classList.add('ohes-game-piece')
        };
        })
        )*/

    return { populateBoard, squareList }
})();

const gamestates = (() => {
    const toggleState= () => {
            if (exPhase){
                exPhase = false;
                ohPhase = true;
            } else if (ohPhase) {
                ohPhase = false;
                exPhase = true;
            }
    }

    const toggleswitch = document.querySelector('.ticktacky');
    toggleswitch.addEventListener('click', () => {
        gamestates.toggleState()
        switch(ohPhase){
            case true:
                toggleswitch.style.backgroundColor="yellow";
                break;
            case false:
                toggleswitch.style.backgroundColor="red";
                break;
            default:
                toggleswitch.style.backgroundColor='white';
                break;
        };
    });


    return {toggleState, toggleswitch}
})();


// game logic

const checkMatch = () =>{
    const square1 = document.querySelector('.square1');
    const square2 = document.querySelector('.square2');
    const square3 = document.querySelector('.square3');
    const square4 = document.querySelector('.square4');
    const square5 = document.querySelector('.square5');
    const square6 = document.querySelector('.square6');
    const square7 = document.querySelector('.square7');
    const square8 = document.querySelector('.square8');
    const square9 = document.querySelector('.square9');
    
    const row1 = [square1, square2, square3];
    const row2 = [square4, square5, square6];
    const row3 = [square7, square8, square9];

    const exmarker = 'exes-game-piece';
    const exwins = 'Red wins!';
    const ohmarker = 'ohes-game-piece';
    const ohwins = 'Yellow wins!';
    
    // reds win
    if(row1[0].classList.contains(exmarker)){
        if(row1[1].classList.contains(exmarker)){
            if(row1[2].classList.contains(exmarker)){
                alert(exwins);
            }
        }
    } 
    if(row2[0].classList.contains(exmarker)){
        if(row2[1].classList.contains(exmarker)){
            if(row2[2].classList.contains(exmarker)){
                alert(exwins);
            }
        }
    }
    if(row3[0].classList.contains(exmarker)){
        if(row3[1].classList.contains(exmarker)){
            if(row3[2].classList.contains(exmarker)){
                alert(exwins);
            }
        }
    }
    if(row1[0].classList.contains(exmarker)){
        if(row2[0].classList.contains(exmarker)){
            if(row3[0].classList.contains(exmarker)){
                alert(exwins);
            }
        }
    }
    if(row1[1].classList.contains(exmarker)){
        if(row2[1].classList.contains(exmarker)){
            if(row3[1].classList.contains(exmarker)){
                alert(exwins);
            }
        }
    }
    if(row1[2].classList.contains(exmarker)){
        if(row2[2].classList.contains(exmarker)){
            if(row3[2].classList.contains(exmarker)){
                alert(exwins);
            }
        }
    }
    if(row1[0].classList.contains(exmarker)){
        if(row2[1].classList.contains(exmarker)){
            if(row3[2].classList.contains(exmarker)){
                alert(exwins);
            }
        }
    }
    if(row1[2].classList.contains(exmarker)){
        if(row2[1].classList.contains(exmarker)){
            if(row3[0].classList.contains(exmarker)){
                alert(exwins);
            }
        }
    }


    // yellows win
    if(row1[0].classList.contains(ohmarker)){
        if(row1[1].classList.contains(ohmarker)){
            if(row1[2].classList.contains(ohmarker)){
                alert(ohwins);
            }
        }
    } 
    if(row2[0].classList.contains(ohmarker)){
        if(row2[1].classList.contains(ohmarker)){
            if(row2[2].classList.contains(ohmarker)){
                alert(ohwins);
            }
        }
    }
    if(row3[0].classList.contains(ohmarker)){
        if(row3[1].classList.contains(ohmarker)){
            if(row3[2].classList.contains(ohmarker)){
                alert(ohwins);
            }
        }
    }
    if(row1[0].classList.contains(ohmarker)){
        if(row2[0].classList.contains(ohmarker)){
            if(row3[0].classList.contains(ohmarker)){
                alert(ohwins);
            }
        }
    }
    if(row1[1].classList.contains(ohmarker)){
        if(row2[1].classList.contains(ohmarker)){
            if(row3[1].classList.contains(ohmarker)){
                alert(ohwins);
            }
        }
    }
    if(row1[2].classList.contains(ohmarker)){
        if(row2[2].classList.contains(ohmarker)){
            if(row3[2].classList.contains(ohmarker)){
                alert(ohwins);
            }
        }
    }
    if(row1[0].classList.contains(ohmarker)){
        if(row2[1].classList.contains(ohmarker)){
            if(row3[2].classList.contains(ohmarker)){
                alert(ohwins);
            }
        }
    }
    if(row1[2].classList.contains(ohmarker)){
        if(row2[1].classList.contains(ohmarker)){
            if(row3[0].classList.contains(ohmarker)){
                alert(ohwins);
            }
        }
    }
};



gameboard.populateBoard(gameboard.squareList);