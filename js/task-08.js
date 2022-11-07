const formRefs = document.querySelector(`.login-form`);
// console.log(formRefs);

formRefs.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //   console.log(event.currentTarget.elements);

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  //   console.log(email, password);
  if (email === "" || password === "") {
    alert(`Please fill in the input fields!`);
  }
  console.log({ email, password });
  event.currentTarget.reset();
}
