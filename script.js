// creation of div grid
const container = document.getElementById("container");

// function that creates individual divs that is formed in a x * y grid
// each grid is created with the 'grid-item' class
function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let grid = document.createElement("div");
    container.appendChild(grid).className = "grid-item";
    grid.addEventListener("mouseover", addColor, false);
  }
};

function addColor() {
  const square = document.querySelectorAll('.grid-item');

  square.forEach((square) => {
    square.addEventListener("mouseover", function(e) {
      e.target.style.backgroundColor = '#9999ff';
    });
  });
}

function clearColor() {
  const gridItems = document.querySelectorAll('#grid-item');

  gridItems.forEach((item) => {
    item.style.backgroundColor = '#ffffff';
  });
}

// Event listeners
const eraseButton = document.getElementById('clearButton');
eraseButton.addEventListener("click", clearColor);

makeGrid(16, 16);
