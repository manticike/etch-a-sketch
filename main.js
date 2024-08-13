const mainContainer = document.querySelector('#container');
const gridSize = document.querySelector('#btn');
// Container size
const padSize = 960;


function getSqureSize(userInput) {
  userInput = prompt('Enter the number of squares');
  let squareSizeInteger = parseInt(userInput);
  return squareSizeInteger;
}
// Event listener to get the grid size
gridSize.addEventListener('click', getSqureSize);

//A function to create the square grid
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.style.width = padSize + 'px';
    row.style.height = padSize/size + 'px';

    for (let j = 0; j < size; j++) {
      let col = document.createElement('div');
      col.classList.add('col', 'grid-item');
      col.style.width = padSize/size + 'px';
      col.style.height = padSize/size + 'px';

      col.addEventListener('mouseenter', ()=> {
        col.style.backgroundColor = getRandomColor();
      });
      row.appendChild(col);
    }
    mainContainer.appendChild(row);
  }
}

// A function to get a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createGrid(16);
