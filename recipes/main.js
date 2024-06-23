import recipes from './recipes.mjs';

console.log('Recipes loaded:', recipes); // Add this line to check if recipes are loaded

document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    function displayRecipes(filteredRecipes) {
        recipeList.innerHTML = '';
        filteredRecipes.forEach(recipe => {
            const recipeElement = document.createElement('article');
            recipeElement.classList.add('recipe');

            const ratingStars = Array(5).fill('☆').map((star, index) => 
                index < recipe.rating ? '⭐' : '☆'
            ).join('');

            recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${ratingStars}
                </span>
                <p>${recipe.description}</p>
            `;

            recipeList.appendChild(recipeElement);
        });
    }

    displayRecipes(recipes); // Display all recipes on initial load

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        displayRecipes(filteredRecipes);
    });
});
