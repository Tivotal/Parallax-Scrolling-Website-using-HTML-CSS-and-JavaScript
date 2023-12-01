/* Created by Tivotal */

let text = document.querySelector(".text");
let leftGate = document.querySelector(".left");
let rightGate = document.querySelector(".right");

window.addEventListener("scroll", () => {
  let val = window.scrollY;

  text.style.marginTop = val * 2.5 + "px";

  leftGate.style.left = val * 0.4 + "px";
  rightGate.style.left = val * -0.4 + "px";
});
