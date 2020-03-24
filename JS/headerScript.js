var myIndex = 0;
var imgadrr = [
  "images/HeaderBack-1.jpg",
  "images/HeaderBack-2.jpg",
  "images/HeaderBack-3.jpg"
];

function headerSlider() {
  var i;
  var x = document.getElementsByClassName("headerSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.background =
    "url(" +
    imgadrr[myIndex - 1] +
    ") no-repeat no-repeat fixed center center ";
  x[myIndex - 1].style.backgroundSize = "cover";
  x[myIndex - 1].style.display = "block";
  setTimeout(headerSlider, 3000);
}
