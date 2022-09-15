const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const addtoSpanEl = inputEl.addEventListener("input", (event) => {
    spanEl.textContent = event.currentTarget.value;
});






