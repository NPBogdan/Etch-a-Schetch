//Showing the initial table
for (let i = 0; i < 10; i++) {
    let lineDiv = document.createElement('div');
    lineDiv.classList.add('lineDiv');
    document.querySelector('.container').appendChild(lineDiv);
    for (let i = 0; i < 10; i++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        lineDiv.appendChild(square);
        square.addEventListener("mouseenter", function () {
            //Random color
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            square.style.backgroundColor = "#" + randomColor;
        });
    }
}

//Delete the container children
function removeAllChildrenNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const button = document.querySelector('.btn');
button.addEventListener('click', function () {
    const userInput = prompt('Enter a number smaller than 100 :', '10');
    const numberInput = +userInput;
    let container = document.querySelector('.container');
    removeAllChildrenNodes(container);
    //Checking if the user set the size below 100px
    if (userInput < 100 && userInput!= undefined) {
        game(numberInput);
    }
    else {
        alert("Insert to correct number! Please enter another one.");
        //Showing the initial table
        for (let i = 0; i < 10; i++) {
            let lineDiv = document.createElement('div');
            lineDiv.classList.add('lineDiv');
            document.querySelector('.container').appendChild(lineDiv);
            for (let i = 0; i < 10; i++) {
                let square = document.createElement("div");
                square.setAttribute("class", "square");
                lineDiv.appendChild(square);
                square.addEventListener("mouseenter", function () {
                    //Random color
                    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    square.style.backgroundColor = "#" + randomColor;
                });
            }
        }
    }
})

//Table with the user's input
function game(userInput = 10) {
    for (let i = 0; i < userInput; i++) {
        let lineDiv = document.createElement('div');
        lineDiv.classList.add('lineDiv');
        document.querySelector('.container').appendChild(lineDiv);
        for (let i = 0; i < userInput; i++) {
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            // square.textContent = 'abcdefg'
            lineDiv.appendChild(square);
            square.addEventListener("mouseenter", function () {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                square.style.backgroundColor = "#" + randomColor;
            });
        }
    }
}