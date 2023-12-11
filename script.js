//Showing the initial table
for (let i = 0; i < 16; i++) {
    let lineDiv = document.createElement('div');
    lineDiv.classList.add('lineDiv');
    document.querySelector('.container').appendChild(lineDiv);
    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        square.textContent = '.';
        lineDiv.appendChild(square);
        square.addEventListener("mouseenter", function () {
            square.style.backgroundColor = "red";
        });
    }
}

function removeAllChildrenNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const button = document.querySelector('.btn');
button.addEventListener('click', function () {
    const userInput = prompt('Enter a number smaller than 100 :', '16');
    const numberInput = +userInput;
    let container = document.querySelector('.container');
    removeAllChildrenNodes(container);
    console.log(document.querySelector('.container'));
  
    game(numberInput);
})

function game(userInput) {
    for (let i = 0; i < userInput; i++) {
        let lineDiv = document.createElement('div');
        lineDiv.classList.add('lineDiv');
        document.querySelector('.container').appendChild(lineDiv);
        for (let i = 0; i < userInput; i++) {
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            square.textContent = '.';
            lineDiv.appendChild(square);
            square.addEventListener("mouseenter", function () {
                square.style.backgroundColor = "red";
            });
        }
    }
}