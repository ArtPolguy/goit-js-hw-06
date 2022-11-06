const inputRefs = document.querySelector(`#name-input`);

const outputRefs = document.querySelector(`#name-output`);

const onFormInput = (event) => {
  if (event.currentTarget.value === "") {
    return (outputRefs.textContent = `Anonymous`);
  }
  return (outputRefs.textContent = event.currentTarget.value);
};

inputRefs.addEventListener("input", onFormInput);
