/* content was inspired by https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown*/
/* When the user clicks on the button,
toggle between hiding and showing the navitem content */
function myFunction() {
    document.getElementById("mynavitem").classList.toggle("show");
    var navitems = document.getElementsByClassName("navitem-content 2");
    var i;
    for (i = 0; i < navitems.length; i++) {
      var opennavitem = navitems[i];
      if (opennavitem.classList.contains('show')) {
        opennavitem.classList.remove('show');
      }
    }
}

function myFunction1() {
    document.getElementById("mynavitem1").classList.toggle("show");
    var navitems = document.getElementsByClassName("navitem-content 3");
    var navitems1 = document.getElementsByClassName("navitem-content 1")
    var i;
    for (i = 0; i < navitems.length; i++) {
      var opennavitem = navitems[i];
      if (opennavitem.classList.contains('show')) {
        opennavitem.classList.remove('show');
      }
    }
    for (i = 0; i < navitems1.length; i++) {
      var opennavitem = navitems1[i];
      if (opennavitem.classList.contains('show')) {
        opennavitem.classList.remove('show');
      }
    }
}

function myFunction2() {
    document.getElementById("mynavitem2").classList.toggle("show");
    var navitems = document.getElementsByClassName("navitem-content 2");
    var i;
    for (i = 0; i < navitems.length; i++) {
      var opennavitem = navitems[i];
      if (opennavitem.classList.contains('show')) {
        opennavitem.classList.remove('show');
      }
    }
}

// Close the navitem if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.navbtn')) {

    var navitems = document.getElementsByClassName("navitem-content");
    var i;
    for (i = 0; i < navitems.length; i++) {
      var opennavitem = navitems[i];
      if (opennavitem.classList.contains('show')) {
        opennavitem.classList.remove('show');
      }
    }
  }
}
