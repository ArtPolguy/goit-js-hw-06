const inputRangeRefs = document.querySelector(`#font-size-control`);
// console.log(inputRangeRefs);

const textRefs = document.querySelector(`#text`);
// console.dir(textRefs);

inputRangeRefs.addEventListener(`input`, onInputRange);

function onInputRange(event) {
  textRefs.style.fontSize = event.currentTarget.value + "px";
  //   console.log(event.currentTarget.value);
}
