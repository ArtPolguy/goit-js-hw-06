const listItemRefs = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${listItemRefs.length}`);

listItemRefs.forEach(function (el) {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
