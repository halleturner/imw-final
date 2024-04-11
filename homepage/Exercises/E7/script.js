console.log('test')
$('body').css('background-color', 'blue');

//Number of squares
const numRows = 500;
const numCols = 500;


//This creates square divs and add them to the grid container
const gridContainer = document.getElementById('grid-container');
for (let i = 0; i < numRows * numCols; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
}

gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

//hover effect
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.transform = 'translateY(-10px)';
        square.style.backgroundColor = "white";
    });
    square.addEventListener('mouseout', () => {
        square.style.transform = 'translateY(0)';
        square.style.backgroundColor = "orange";
    });

});


