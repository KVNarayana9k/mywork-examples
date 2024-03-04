const gridContainer = document.getElementById('gridContainer');
const searchInput = document.getElementById('searchInput');
const cuisineSelect = document.getElementById('cuisineSelect');
const searchBtn = document.getElementById('searchBtn');
const homeBtn = document.getElementById('homeBtn');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popupContent');
const closeBtn = document.getElementById('closeBtn');

let allRecipes = [];

async function fetchRecipes() {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    allRecipes = data.recipes;
    // console.log(allRecipes);
    displayRecipes(allRecipes);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayRecipes(recipes) {
  gridContainer.innerHTML = '';
  recipes.forEach(recipe => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const image = document.createElement('img')
    
    image.setAttribute("src",recipe.image);
    const name = document.createElement('p');
    name.textContent = recipe.name;
    gridItem.append(image, name);
    gridItem.addEventListener('click', () => {
      showPopup(recipe.name, recipe.instructions, recipe.ingredients , recipe.prepTimeMinutes);
    });
    gridContainer.appendChild(gridItem);
  });
}

function filterRecipes(query, cuisine) {
  let filteredRecipes = allRecipes;
  if (query) {
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query)
    );
  }
  if (cuisine) {
    filteredRecipes = filteredRecipes.filter(recipe =>
      recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
    );
  }
  displayRecipes(filteredRecipes);
}

function showPopup(name, preparation, ingredients, preparationTime) {
  popupContent.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Preparation Time:</strong> ${preparationTime} minutes</p>
    <p><strong>Preparation:</strong></p>
    <ol>${preparation.map(step => `<li>${step}</li>`).join('')}</ol>
    <p><strong>Ingredients:</strong></p>
    <ul>${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
  `;
  popup.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Disable scrolling
}

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.style.overflow = ''; // Enable scrolling
});


searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase();
  const cuisine = cuisineSelect.value.trim().toLowerCase();
  filterRecipes(query, cuisine);
});

homeBtn.addEventListener('click', () => {
  displayRecipes(allRecipes);
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const cuisine = cuisineSelect.value.trim().toLowerCase();
  filterRecipes(query, cuisine);
});


searchBtn.addEventListener('click', () => {
  searchInput.classList.remove('active');
});
cuisineSelect.addEventListener('change', () => {
  const query = searchInput.value.trim().toLowerCase();
  const cuisine = cuisineSelect.value.trim().toLowerCase();
  filterRecipes(query, cuisine);
});

fetchRecipes();
