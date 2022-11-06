let counterValue = 0;
const valueRefs = document.querySelector(`#value`);

const decrementBtnRefs = document.querySelector(`[data-action="decrement"]`);
const incrementBtnRefs = document.querySelector(`[data-action="increment"]`);

const onClickDecrementButton = () => {
  counterValue -= 1;
  valueRefs.textContent = counterValue;
};
const onClickIncrementButton = () => {
  counterValue += 1;
  valueRefs.textContent = counterValue;
};

decrementBtnRefs.addEventListener(`click`, onClickDecrementButton);
incrementBtnRefs.addEventListener(`click`, onClickIncrementButton);
