
document.addEventListener('DOMContentLoaded', function () {
  let settingsIcon = document.querySelector('.fixed-icon');
  let dropdown = document.querySelector('.dropdown');
  let colorCircles = document.querySelectorAll('.color-circle');
  const whiteCircle = document.getElementById('white-circle');;
  const blackCircle = document.getElementById('black-circle');
  let imageSwitch = document.getElementById('imageSwitch');
  let images = document.querySelectorAll('.img-holder');

 

})



function openSettings(){
  settingsIcon.addEventListener('click', ()=>{ 

  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }})
}












