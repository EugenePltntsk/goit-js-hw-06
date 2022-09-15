const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");


const result = ingredients.map(ingredient => {
  const liElement = document.createElement("li")
  liElement.textContent = ingredient;
  liElement.classList.add("item");
  return liElement;
});
listEl.append(...result);





// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое. textContent
// Добавит элементу класс item. "elem.classList.add(cls)
// Зберегти результат у змінну.

//додати одразу весь массив в ДОМ. append(el, el)


