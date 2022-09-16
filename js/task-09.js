function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  const goalColor = getRandomHexColor();
  spanEl.textContent = goalColor;
  bodyEl.style.backgroundColor = goalColor;
});



