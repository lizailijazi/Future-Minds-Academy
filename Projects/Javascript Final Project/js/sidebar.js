let sidebarControl = document.getElementById('sidebar-control');
let sidebar = document.getElementById('side-bar');

sidebarControl.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed')
    if (sidebar.classList.contains('collapsed')) {
        sidebarControl.innerHTML = 'menu';
    } else {
        sidebarControl.innerHTML = 'more_vert';
    }
})





let expandIcon = document.querySelectorAll('.expland');
let pagesMenu = document.querySelector('.menu-bar');
let dropdown = document.querySelector('.sub-menu');

expandIcon.forEach(function(icon) {
    icon.addEventListener('click', function(){
        let parentItem = icon.closest('.menu-bar');
        let dropdown = parentItem.querySelector('.sub-menu');

        if(dropdown) {
            parentItem.classList.toggle('open');
            icon.classList.toggle('rotate');

            
        }
    })
  
});
pagesMenu.addEventListener('click', function(){
    dropdown.classList.toggle('open');

})

let expandIcon2 = document.querySelectorAll('.expland1');
let pagesMenu2 = document.querySelector('.user');
let dropdown2 = document.querySelector('.sub-menu1');

expandIcon2.forEach(function(icon) {
    icon.addEventListener('click', function(){
        let parentItem = icon.closest('.user');
        let dropdown = parentItem.querySelector('.sub-menu1');

        if(dropdown) {
            parentItem.classList.toggle('openUser');
            icon.classList.toggle('rotate');

            
        }
    })
  
});
pagesMenu2.addEventListener('click', function(){
    dropdown2.classList.toggle('openUser');

})










