//<----  Declaring each button & HTML  ---->
let buttonClick1 = document.querySelector(".destination:nth-of-type(1) .btn");
let buttonClick2 = document.querySelector(".destination:nth-of-type(2) .btn");
let buttonClick3 = document.querySelector(".destination:nth-of-type(3) .btn");
let container = document.querySelector(".container");
let destH4 = document.querySelector(".destination h4");
let destP = document.querySelector(".destination p");

//<----  #1 Event Listener (Counts the times clicked)  ---->
buttonClick1.addEventListener("click", (event) => {
  buttonClick1.innerHTML = `Click count: ${event.detail}`;
});

//<----  #2 Event Listener (When clicked with left or right mouse, the text/background colors change)  ---->
function random(number) {
  return Math.floor(Math.random() * number);
}
function randomColor() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

buttonClick2.onclick = function () {
  buttonClick2.style.backgroundColor = randomColor();
};

buttonClick2.onauxclick = function (e) {
  e.preventDefault();
  buttonClick2.style.color = randomColor();
};

buttonClick2.oncontextmenu = function (e) {
  e.preventDefault();
};

//<----  #3 Event Listener (Scroll to resize the button) ---->

function zoom(event) {
  event.preventDefault();

  scale = Math.min(Math.max(0.125, scale), 4);

  buttonClick3.style.transform = `scale(${scale})`;
}
let scale = 1;
buttonClick3.onwheel = zoom;
buttonClick3.addEventListener("wheel", zoom);

//<---- #4 Event Listener (Dbl click to show an alert box) ---->
buttonClick3.addEventListener("dblclick", function () {
  alert("This is for the DBL Click Event!");
});

//<---- #5 Event Listener (Click to show different content) ---->
buttonClick1.addEventListener("click", function () {
  buttonClick1.innerText = "Welcome!";
});

//<---- #6 Event Listener (Change button to text to Click) ---->
buttonClick2.addEventListener("click", function () {
  buttonClick2.innerHTML = "Clicked!";
});

//<---- #7 Event Listener (mouseover to change style of BG for .container) ---->
buttonClick3.addEventListener("mouseover", function () {
  container.style.backgroundColor = "red";
});

//<---- #8 Event Listener (mouseout to change style of BG for .intro h2) ---->
buttonClick1.addEventListener("mouseout", function () {
  destH4.style.color = "blue";
});

//<---- #9 Event Listener (Click to change the document background to a diff color) ---->
buttonClick2.addEventListener("inputBlur", function () {
  destP.style.color = "red";
});
