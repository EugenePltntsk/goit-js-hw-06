const refs = {
  email: document.querySelector('[name = "email"]'),
  password: document.querySelector('[name = "password"]'),
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (refs.email.value === "" || refs.password.value === "") {
    return alert("ERROR!! все поля должны быть заполнены");
  }
  const data = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
  };
  console.log(data);
  event.target.reset();
});
