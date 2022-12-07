"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log(`У списку є ${totalCategories.length} категорії.`);

const categoriesArray = [...totalCategories]
  .map(categories => `Категорія: ${categories.children[0].textContent}
К-ть елементів: ${categories.children[1].children.length}`)
  .join("\n");
console.log(categoriesArray);