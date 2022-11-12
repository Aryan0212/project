// When the user scrolls the page, execute myFunction
/*window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
*/

function myFunction() {
  const element = document.getElementById("scrolling");
  let x = element.scrollLeft;
  document.getElementById ("pixelsscrolled").innerHTML = "Light Years=" + (x.toFixed())*39333/9460000000000+"  Distance=" + (x.toFixed())*39333+"km  " + " Pixels=" + (x.toFixed())+" " ;


}

