var menu = document.getElementById("menu"),
    navbar = document.getElementById("navbar"),
    menubar = document.getElementById("menubar"),
    menubarlist = document.getElementById("menubarlist");
function dropdowndisplay(resolution) {
    
    if (resolution.matches) {
        menu.style.display = "flex";
        navbar.style.display = "none";
        menubar.style.display = 'flex';
    }
    else {
        menu.style.display = "none";
        navbar.style.display = "flex";
        menubar.style.right = '-230px';
        menu.style.rotate = 'none';
    }
}
var resolution = window.matchMedia("(max-width: 700px)")
dropdowndisplay(resolution)
resolution.addListener(dropdowndisplay)
menu.style.rotate = 'none';
menu.addEventListener('click', function () {
    if (menu.style.rotate == 'none') {
        menubar.style.width = '230px';
        menu.style.rotate = '180deg';
        menubarlist.style.width = '230px';
    }
    else {
        menubar.style.width = '0px';
        menu.style.rotate = 'none';
        menubarlist.style.width = '0px';
    }

})