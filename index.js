"use strict";
let textarea = document.querySelector("textarea");
textarea.addEventListener("keypress", textareaLengthCheck);
const counter = document.querySelector(".col-2__counter--symbol");
function textareaLengthCheck() {
  let count = textarea.value.length + 1;
  counter.innerHTML = count;
}

textarea.addEventListener("keydown", KeyCheck);
function KeyCheck(event) {
  const { keyCode } = event;
  if (keyCode === 8 || 46) {
    counter.innerHTML = textarea.value.length - 1;
  }
}
// https://dmb-2222.github.io/ukrsib/index.html