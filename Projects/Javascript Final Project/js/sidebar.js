console.log('hello')

function toggleSidebar() {
    var sidebar = document.getElementById("nav");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
  }


  function displaySecondDropdown(){
    let secondDropdown = document.getElementById('second-dropdown-container')
secondDropdown.style.display = 'block'
}