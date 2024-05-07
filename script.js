const toggleButton = document.getElementById('navbar-toggle');
const navLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }