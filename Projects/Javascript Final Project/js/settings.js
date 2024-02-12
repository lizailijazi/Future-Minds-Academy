let colorButton = document.getElementById("color");
let sidebar = document.getElementById("sidebar");
let settingsicon = document.getElementById('fixed-icon')

let settings = document.getElementById('settings')

function openSettings(){
    settingsicon.addEventListener('click', ()=>{ 
  
    if (settings.style.display === 'block') {
      settings.style.display = 'none';
    } else {
      settings.style.display = 'block';
    }})
}


openSettings()


// function changeColor(color) {
//   sidebar.style.background = color;
// }

// function changeBackgroundColor() {
//   // changeColor(colorButton.style.backgroundColor);
//   changeColor("yellow");
// }

//make a local storage


// localStorage('settings', {
//   sidebarColor: orange
// })