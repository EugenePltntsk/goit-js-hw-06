const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const addtoSpanEl = inputEl.addEventListener("input", (event) => {
   
    if (event.target.value === "") {
        spanEl.textContent = "Anonymous";
    } else { 
      spanEl.textContent = event.currentTarget.value;
    }
});






