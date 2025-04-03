const main = async () => {
  const API_URL = `https://dummyjson.com/recipes?limit=20&skip=0`;
  const response = await fetch(API_URL);
  const recipesData = await response.json();

  const recetasGrid = document.querySelector(`.recetas_grid`);

  recipesData.recipes.forEach((recipe) => {
    recetasGrid.innerHTML += `
        <div class="receta">
            <img src= "${recipe.image}" alt= "${recipe.name}" />
            <h3>
                ${recipe.name}
            </h3>
            <a href="/recipe.html?id=${recipe.id}"> Ver más </a>
        </div>
        `;
  });
};

main();
