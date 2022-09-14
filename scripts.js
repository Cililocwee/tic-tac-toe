const debugging = (() => {
    function print(string){
        console.log(string);}

    return {print}    
})();


const squareList = document.querySelectorAll('.square');
squareList.forEach(element =>
    element.addEventListener('click', () => {
        element.classList.add('selected');
    }))


