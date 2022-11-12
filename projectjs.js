

function myFunction() {
  const element = document.getElementById("scrolling");
  let x = element.scrollLeft;
  document.getElementById ("pixelsscrolled").innerHTML = "Light Years=" + (x.toFixed())*39333/9460000000000+"  Distance=" + (x.toFixed())*39333+"km  " + " Pixels=" + (x.toFixed())+" " ;


}   