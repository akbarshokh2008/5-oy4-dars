let body = document.querySelector("#body");
let button = document.querySelector("#btn");
function randomColor() {
  let randomColor1 = Math.floor(Math.random() * 255);
  let randomColor2 = Math.floor(Math.random() * 255);
  let randomColor3 = Math.floor(Math.random() * 255);
  let randomdeg = Math.floor(Math.random() * 100);
  let randomdeg1 = Math.floor(Math.random() * 100);
  let randomdeg2 = Math.floor(Math.random() * 100);
  let randomdeg3 = Math.floor(Math.random() * 100);
  let gradient = `linear-gradient(${randomdeg}deg,rgb(${randomColor1}, 0, 0) ${randomdeg3}%, rgb(0, ${randomColor2}, 0) ${randomdeg2}%, rgb(0, 0, ${randomColor3}) ${randomdeg1}%)`;
  body.style.background = gradient;
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "100%";
}
button.addEventListener("click", randomColor);
