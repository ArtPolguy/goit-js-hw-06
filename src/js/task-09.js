const bodyRefs = document.body;
const btnColorChangeRefs = document.querySelector(`.change-color`);
const spanColorRefs = document.querySelector(`.color`);

btnColorChangeRefs.addEventListener(`click`, onBtnChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnChangeColor(event) {
  bodyRefs.style.backgroundColor = getRandomHexColor();
  spanColorRefs.textContent = bodyRefs.style.backgroundColor;
}
