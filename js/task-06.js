const inputRefs = document.querySelector(`#validation-input`);

inputRefs.addEventListener(`blur`, onCheckInputLength);

function onCheckInputLength(event) {
  inputRefs.classList.remove(`invalid`);

  if (event.currentTarget.value.length === Number(inputRefs.dataset.length)) {
    return inputRefs.classList.add(`valid`);
  }
  return inputRefs.classList.add(`invalid`);
}


