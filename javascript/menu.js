/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menuFunction() {
    var x = document.getElementById("navButtons");
    if (x.className === "nav-buttons") {
      x.className += " responsive";
    } else {
      x.className = "nav-buttons";
    }
  } 