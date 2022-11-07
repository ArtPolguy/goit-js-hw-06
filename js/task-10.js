function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRefs = document.querySelector(`#input, input`);
console.log(inputRefs);
const btnCreateRefs = document.querySelector(`[data-create]`);
console.log(btnCreateRefs);
const btnDestroyRefs = document.querySelector(`[data-destroy]`);
console.log(btnDestroyRefs);

// btnCreateRefs.addEventListener(`click`);
// btnDestroyRefs.addEventListener(`click`);

function createBoxes(amount) {
  amount = inputRefs.value;
  const arrMarkup = [];
  const basisSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const changeSize = basisSize + i * 10;
    const changeColor = getRandomHexColor();
    `<div style="height:${changeSize}px; width: ${changeSize}px; background-color: ${changeColor}"></div>`;
  }
}
