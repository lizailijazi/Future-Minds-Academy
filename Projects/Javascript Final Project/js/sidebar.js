
//SIDEBAR COLLAPSE
let sidebarControl = document.getElementById('sidebar-control')
let sidebar = document.getElementById('sidebar')
let sidebarControlIcon = document.getElementById('sidebarCollapseIcon')


sidebarControl.addEventListener('click', ()=>{
sidebar.classList.toggle('collapse')
if(sidebarControlIcon.innerHTML =='lists')
{sidebarControlIcon.innerHTML = 'more_vert'}
else{sidebarControlIcon.innerHTML = 'lists' 
}
})




let dropdownItems = sidebar.querySelectorAll('.sidebar-item')

// SECOND DROPDOWNS
let secondDropdown = document.querySelectorAll('second-dropdown-list');
let dropdown = document.querySelectorAll('dropdown-container')
// let downArrow = document.getElementById('down')

function displaySecondDropdown() {
  dropdown.addEventListener('click', () => {
    if (secondDropdown.style.display === 'block') {
      secondDropdown.style.display = 'none';
    } else {
      secondDropdown.style.display = 'block';
    }
  });
}


displaySecondDropdown();

// dropdownItems.forEach(item =>{
//   let secondDropdown = document.getElementById('second-dropdown-list');
//   if(secondDropdown){
//     item.addEventListener('click', ()=>{
//       item.parentElement.classList.toggle('sublist-open')
//     })
//   }
// })







