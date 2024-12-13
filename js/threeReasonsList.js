const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const reasonsList = document.querySelectorAll('.three-reasons-list');

let currentIndex = 0;

function updateView() {
  reasonsList.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });

  // Оновлення стану кнопок
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === reasonsList.length - 1;
}

// Обробники подій для кнопок
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateView();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < reasonsList.length - 1) {
    currentIndex++;
    updateView();
  }
});

// Початкове відображення
updateView();


function updateThreeReasonsTitle() {
  const threeReasonsTitle = document.querySelector('.three-reasons-title');
  
  if (window.innerWidth <= 1439) {
    threeReasonsTitle.textContent = "3 Reasons"; // Мобільна версія
  } else {
    threeReasonsTitle.textContent = "Three Reasons Why Thousands Trust Duradry"; // Десктопна версія
  }
}

// Викликаємо функцію при завантаженні сторінки
updateThreeReasonsTitle();

// Викликаємо функцію при зміні розміру вікна
window.addEventListener('resize', updateThreeReasonsTitle);