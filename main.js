const mainContainer = document.querySelector('#container');
const gridSize = document.querySelector('#btn');
const padSize = 960;

function getSquareSize() {
  let userInput = prompt('Enter the number of squares you want');
  let squareInteger = parseInt(userInput);

  if (isNaN(squareInteger) || squareInteger <= 0) {
    alert('Please enter a valid number greater than 0');
    return null;
  } else if (squareInteger > 100) {
    alert('Size larger than 100 will consume too much resources');
    return null;
  } else {
    return squareInteger;
  }
}

function createGrid(size) {
  // clear existing grid
  mainContainer.textContent = '';

  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.style.width = padSize + 'px';
    row.style.height = padSize/size + 'px';

    for (let j = 0; j < size; j++) {
      let col = document.createElement('div');
      col.classList.add('col');
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

// Event listener to get the grid size
gridSize.addEventListener('click', function() {
  let size = getSquareSize();
  if (size !== null) {
    createGrid(size);
  }
});