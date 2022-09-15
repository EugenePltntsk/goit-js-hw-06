const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");



inputEl.addEventListener("input", event => {
  const size = inputEl.value;
    spanEl.style.fontSize = size + "px";
    
});



