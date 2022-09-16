function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("[type = 'number']");
const buttonCr = document.querySelector("[data-create]");
const buttonDes = document.querySelector("[data-destroy]");
const mainEl = document.querySelector("#boxes")

 
const createBoxes = () => { 
  const numberOfBoxes = inputEl.value;
  const arrElements = [];
  const defaultSize = 30;
  for (let i = 0; i < numberOfBoxes; i += 1) {
    const currentSize = defaultSize + i * 10;
    const newBox = document.createElement("div");
    newBox.style.width = currentSize + "px";
    newBox.style.height = currentSize + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    arrElements.push(newBox);
  }
  mainEl.append(...arrElements);
}
 
buttonCr.addEventListener("click", createBoxes);

const destroyBoxes = () => { 
  mainEl.innerHTML = "";
}

buttonDes.addEventListener("click", destroyBoxes);