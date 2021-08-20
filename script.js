// creation of div grid
const container = document.getElementById("container");

// function that creates individual divs that is formed in a x * y grid
// each grid is created with the 'grid-item' class
function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let grid = document.createElement("div");
    container.appendChild(grid).className = "grid-item"
  }
};

makeGrid(16, 16);
