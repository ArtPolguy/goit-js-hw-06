const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredientsRefs = document.querySelector(`ul`);

const listIngredientsItemRefs = ingredients.map((element) => {
  const listItemRefs = document.createElement(`li`);
  listItemRefs.textContent = element;
  listItemRefs.classList.add(`item`);

  return listItemRefs;
});

listIngredientsRefs.append(...listIngredientsItemRefs);
