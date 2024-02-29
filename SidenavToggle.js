window.onload = function () {
    document.getElementById("opener").addEventListener("click", openNav)
    document.getElementById("closebtn").addEventListener("click", closeNav)
}


/* Set the width of the side navigation to 250 */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.borderRightStyle= "solid";
    document.getElementById("closebtn").style.fontSize = "36px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("closebtn").style.fontSize = "0";
    document.getElementById("mySidenav").style.borderRightStyle= "none";
}
