let colorButton = document.getElementById("color");
let sidebar = document.getElementById("sidebar");
let settingsicon = document.getElementById('fixed-icon')
let settings = document.getElementById('settings')
let dashboard = document.getElementById('dashboard')





function openSettings(){
    settingsicon.addEventListener('click', ()=>{ 
  
    if (settings.style.display === 'block') {
      settings.style.display = 'none';
    } else {
      settings.style.display = 'block';
    }})
}


openSettings()

// function updateState(settings){
//   //ndryshon ngjyrat
//   colorButton.addEventListener('click', ()=>{

//   })

//   //ndryshpn pamjen e settings
// }


// let defaultSettings = {
//   sidebarBackground: 'black'}




// if(localStorage.getItem('settings')){
//   settingsColor = localStorage.getItem('settings')
// } else{
//   settingsColor = defaultSettings
// }

// if( settings.sidebarBackground === 'black'){
//   document.documentElement.style.setProperty('--sidebar-overlay', 'black')
//   colorButton.classList.add('selected')
// } else{
//   document.documentElement.style.setProperty('--sidebar-overlay', 'white')
//   colorButton.classList.add('selected')
// }


















// function changeColor(color) {
//   colorButton.addEventListener('click', ()=>{
//     sidebar.style.backgroundColor = color;
//   })

// }

// changeColor(colorButton.style.backgroundColor)

// function changeBackgroundColor() {
//   // changeColor(colorButton.style.backgroundColor);
//   changeColor("yellow");
// }

//make a local storage


// localStorage('settings', {
//   sidebarColor: orange
// })