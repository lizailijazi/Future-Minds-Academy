
//SIDEBAR COLLAPSE
let sidebarControl = document.getElementById('sidebar-control')
let sidebar = document.getElementById('sidebar')
let sidebarControlIcon = document.getElementById('sidebarCollapseIcon')

sidebarControl.addEventListener('click', ()=>{
sidebar.classList.toggle('collapse')
})

// sidebarControlIcon.contains('listsIcon').textcontent = 'lists'




// SECOND DROPDOWNS
let secondDropdown = document.getElementById('second-dropdown-list');
let dropdown = document.getElementById('dropdown-container')
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









