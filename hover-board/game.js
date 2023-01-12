const SQUARES_NUMBER = 1000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  const board = document.querySelector("#board");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
  board.append(square);
}
function setColor(element) {
  const color = getRandomHexColor();
  element.style.cssText = `background: ${color}; box-shadow: 0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.cssText = "background: #1d1d1d; box-shadow: 0 0 2px #000;";
}
function getRandomHexColor() {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}
