const listItemRefs = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${listItemRefs.length}`);

const firstListItemHeadRefs = document.querySelector(`.item h2`);
console.log(`Category: ${firstListItemHeadRefs.textContent}`);

// const test = listItemRefs.firstElementChild(`ul`);
// console.log(test);

const listAnimalRefs = firstListItemHeadRefs.nextElementSibling;
console.log(listAnimalRefs);

const test2 = listAnimalRefs.querySelectorAll(`li`);
console.log(test2.length);
