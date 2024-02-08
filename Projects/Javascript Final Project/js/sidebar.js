
//SIDEBAR COLLAPSE
let sidebarControl = document.getElementById('sidebar-control')
let sidebar = document.getElementById('sidebar')
let sidebarControlIcon = document.getElementById('sidebarCollapseIcon')

sidebarControl.addEventListener('click', ()=>{
sidebar.classList.toggle('collapse')
})

// sidebarControlIcon.contains('listsIcon').textcontent = 'lists'




// SECOND DROPDOWNS
let secondDropdown = document.getElementById('secondDropdownContainer');

function displaySecondDropdown() {
  secondDropdown.addEventListener('click', () => {
    if (secondDropdown.style.display === 'block') {
      secondDropdown.style.display = 'none';
      alert('yes')
    } else {
      secondDropdown.style.display = 'block';
      alert('no')
    }

    alert('hello');
  });
}


displaySecondDropdown();









