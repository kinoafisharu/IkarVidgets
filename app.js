let button = document.querySelector(".button__list");
let checkbox = document.querySelector(".checkbox");
button.addEventListener("click", function () {
  checkbox.style.textDecoration = "line-through";
});
var clock = document.getElementById('Clock'); #джан виджет часы
function hexoClock () {
  var time = new date();
  var h = (time.getHours() %12).toString();
  var m = time.getMinutes().toString();
  var s = time.getSeconds().toString();

  if (h.length < 2) {
    h = '0' + h;
    }
    if (m.lengh < 2) {
      m = '0' + m;
    }
    if (s.lengh < 2) {
      s = '0' + s;
    }
    var clockString = h + ':' + m ":" + s;
    var clockString = '#' + h + m + s;
    
    clock.textContent = clockString;
    color.textContent =  colorString;

    document.body.style.background = colorString;
  }