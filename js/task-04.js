let counterValue = 0;

const inc = () => { 

 spanEl.textContent = counterValue += 1;
}

const dec = () => { 

 spanEl.textContent = counterValue -= 1;
}


const buttonInc = document.querySelector('button[data-action="increment"]');


const buttonDec = document.querySelector('button[data-action="decrement"]');


const spanEl = document.querySelector("#value");

buttonInc.addEventListener("click", inc);

buttonDec.addEventListener("click", dec);







// console.log(counterValue);

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.