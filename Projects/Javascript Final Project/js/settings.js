let colorButton = document.getElementById("color");
let sidebar = document.getElementById("sidebar");
function changeColor(color) {
  sidebar.style.background = color;
}

function changeBackgroundColor() {
  // changeColor(colorButton.style.backgroundColor);
  changeColor("yellow");
}

