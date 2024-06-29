import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    function tagsTemplate(tags) {
        return tags.map(tag => `<li>${tag}</li>`).join('');
    }

    function ratingTemplate(rating) {
        let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
        for (let i = 1; i <= 5; i++) {
            html += i <= rating ? '<span aria-hidden="true">⭐</span>' : '<span aria-hidden="true">☆</span>';
        }
        html += `</span>`;
        return html;
    }

    function recipeTemplate(recipe) {
        return `
            <article class="recipe">
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe__tags">${tagsTemplate(recipe.tags)}</div>
                <div class="recipe-content">
                    <h2>${recipe.name}</h2>
                    ${ratingTemplate(recipe.rating)}
                    <p>${recipe.description}</p>
                </div>
            </article>
        `;
    }

    function displayRecipes(filteredRecipes) {
        recipeList.innerHTML = '';
        filteredRecipes.forEach(recipe => {
            recipeList.innerHTML += recipeTemplate(recipe);
        });
    }

    function getRandomListEntry(list) {
        const randomIndex = Math.floor(Math.random() * list.length);
        return list[randomIndex];
    }

    function init() {
        const randomRecipe = getRandomListEntry(recipes);
        displayRecipes([randomRecipe]);
    }

    init(); 

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
