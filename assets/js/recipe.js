const main = async () => {
  const searchParams = new URLSearchParams(window.location.search);
  const idRecipe = searchParams.get("id");
  console.log(idRecipe);

  //hacer fetch a la url
  const URL = `https://dummyjson.com/recipe/${idRecipe}`;
  const res = await fetch(URL);
  const recipe = await res.json();
  console.log(recipe);

  //title
  const recipeTitle = document.querySelector(".recipe_title");
  recipeTitle.innerHTML = recipe.name;

  const recipeRating = document.querySelector(".rating_review");
  recipeRating.innerHTML = `<h2>★ ${recipe.rating} (${recipe.reviewCount} reviews)</h2>`;

  //info
  const info = document.querySelector(".recipe_info");
  info.innerHTML = `
        <h3>${recipe.mealType} </h3>
        <h3>Difficulty: ${recipe.difficulty}</h3>
        <h3>Cuisine: ${recipe.cuisine}</h3>
  `;

  //boxes
  const boxes = document.querySelector(".recipe_boxes");
  boxes.innerHTML = `
        <h4 class="boxes">Prep time: <span class="bold_text">${recipe.prepTimeMinutes} min</span></h4>
        <h4 class="boxes">Cook time: <span class="bold_text">${recipe.cookTimeMinutes} min</span></h4>
        <h4 class="boxes">Servings: <span class="bold_text">${recipe.servings}</span></h4>
        <h4 class="boxes">Calories per serving: <span class="bold_text">${recipe.caloriesPerServing}</span></h4>
  `;

  //img
  const imgCont = document.querySelector(".img_cont");
  imgCont.innerHTML = `<img src="${recipe.image}" alt="${recipe.name}" class="image">`;

  //ingredients
  const recipeIngredients = document.querySelector(".ingredients_list");
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    recipeIngredients.appendChild(li);
  });

  //instructions
  const recipeInstructions = document.querySelector(".instructions");
  recipe.instructions.forEach((instruction) => {
    const li = document.createElement("li");
    li.textContent = instruction;
    recipeInstructions.appendChild(li);
  });

  //tags
  const tags = document.querySelector(".recipe_tags");
  recipe.tags.forEach((tag) => {
    const li = document.createElement("li");
    li.textContent = tag;
    tags.appendChild(li);
  });
};

main();
