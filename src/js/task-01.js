const listItemRefs = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${listItemRefs.length}`);

const firstListHeadRefs = listItemRefs[0].firstElementChild;
console.log(`Category: ${firstListHeadRefs.textContent}`);

const firstItemsRefs = listItemRefs[0].querySelectorAll(`li`);
console.log(`Elements: ${firstItemsRefs.length}`);

const secondListHeadRefs = listItemRefs[1].firstElementChild;
console.log(`Category: ${secondListHeadRefs.textContent}`);

const secondItemsRefs = listItemRefs[1].querySelectorAll(`li`);
console.log(`Elements: ${secondItemsRefs.length}`);

const thirdListHeadRefs = listItemRefs[2].firstElementChild;
console.log(`Category: ${thirdListHeadRefs.textContent}`);

const thirdItemsRefs = listItemRefs[2].querySelectorAll(`li`);
console.log(`Elements: ${thirdItemsRefs.length}`);
