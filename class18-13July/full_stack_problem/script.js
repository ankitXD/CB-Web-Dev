document.addEventListener('DOMContentLoaded', () => {
  fetchDishes();
});

let dishes = [];

async function fetchDishes() {
  try {
    const response = await fetch('dishes.json');
    dishes = await response.json();
    display();
  } catch (e) {
    console.error("Error fetching dishes:", e);
  }
}

function display() {
  const dishesContainer = document.getElementById('dishes');
  dishesContainer.innerHTML = '';

  dishes.forEach(dish => {
    if (dish.isPublished) {
      const dishElement = document.createElement('div');
      dishElement.className = 'dish';

      dishElement.innerHTML = `
        <h2>${dish.dishName}</h2>
        <img src="${dish.imageUrl}" alt="${dish.dishName}">
        <p>Published</p>
        <button onclick="toggleDish(${dish.dishId})">Toggle</button>
      `;

      dishesContainer.appendChild(dishElement);
    }
  });
}

function toggleDish(dishId) {
  const dish = dishes.find(d => d.dishId === dishId);
  if (dish) {
    dish.isPublished = !dish.isPublished;
    display();
  }
}
