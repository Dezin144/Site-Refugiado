function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "ag-bar" + " ag-card" + " ag-animate-top" + " ag-white";
    } else {
        navbar.className = navbar.className.replace(" ag-card ag-animate-top ag-white", "");
    }
}