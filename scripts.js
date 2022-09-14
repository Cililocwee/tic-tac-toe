const debugging = (() => {
    function print(string){
        console.log(string);}

    return {print}    
})();

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

    return {toggleState}
})();


gameboard.populateBoard(gameboard.squareList);