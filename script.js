//Find a way so that the alert only shows when clicked on the lists, but without having onclick for all the lists.

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.Dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
            if (myDropdown.classList.contains('show')) {
              myDropdown.classList.remove('show');
            }
    }
}

