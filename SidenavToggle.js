window.onload = function () {
    document.getElementById("opener").addEventListener("click", openNav)
    document.getElementById("closebtn").addEventListener("click", closeNav)
    document.getElementById("darkmodeToggle").addEventListener("click", toggleLight)
}
let light = true;
if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
}


/* Set the width of the side navigation to 250 */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.color = "#F8F4F9";
    document.getElementById("mySidenav").style.borderRightStyle = "solid";
    document.getElementById("closebtn").style.fontSize = "36px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("closebtn").style.fontSize = "0";
    document.getElementById("mySidenav").style.borderRightStyle = "none";
}

function toggleLight() {

    if (light) {
        document.body.style.backgroundColor = "#000000"
        document.getElementById("resumeContainer").style.border = "2px solid #F8F4F9"
        document.getElementById("topBar").style.backgroundColor = "#000000"
        document.getElementById("topBar").style.color = "#F8F4F9"
        document.getElementById("left").style.backgroundColor = "#000000"
        document.getElementById("center").style.backgroundColor = "#000000"
        document.getElementById("right").style.backgroundColor = "#000000"

        for (let i = 0; i < document.getElementsByClassName("title").length; i++) {
            document.getElementsByClassName("title")[i].style.color = "#F8F4F9";
        }


        document.getElementById("darkmodeToggle").style.color = "#F8F4F9"
        document.getElementById("darkmodeToggle").textContent = "light mode"
        light = false
    } else {
        document.body.style.backgroundColor = "#F8F4F9"
        document.getElementById("resumeContainer").style.border = "2px solid #000000"
        document.getElementById("topBar").style.backgroundColor = "#F8F4F9"
        document.getElementById("topBar").style.color = "#000000"
        document.getElementById("left").style.backgroundColor = "#F8F4F9"
        document.getElementById("center").style.backgroundColor = "#F8F4F9"
        document.getElementById("right").style.backgroundColor = "#F8F4F9"

        for (let i = 0; i < document.getElementsByClassName("title").length; i++) {
            document.getElementsByClassName("title")[i].style.color = "#000000";
        }


        document.getElementById("darkmodeToggle").style.color = "#000000"
        document.getElementById("darkmodeToggle").textContent = "dark mode"
        light = true;
    }
}