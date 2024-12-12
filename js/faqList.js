// Дані у форматі JSON
fetch("./js/data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {

    console.log("data", data)
    // Контейнер для секції
    const footerContainer = document.querySelector(".faq-wrap");

    // Функція для створення однієї "feature" на основі даних
    function createFooter(footerData) {
      const footerList = document.createElement("li");
      footerList.classList.add("faq-list");

      footerList.innerHTML = `
      <span class="faq-title-wrap">
     <p class="faq-title"> ${footerData.title} </p>
<button class="faq-toggle-button">+</button>
</span>
<p class="faq-description" style="display: none;"> ${footerData.description} </p>
     `;

       // Додаємо функціонал для кнопки
       const toggleButton = footerList.querySelector(".faq-toggle-button");
       const descriptionElement = footerList.querySelector(".faq-description");
 
       toggleButton.addEventListener("click", () => {
         if (descriptionElement.style.display === "none") {
           descriptionElement.style.display = "block";
           toggleButton.textContent = "-"; // Міняємо текст кнопки
         } else {
           descriptionElement.style.display = "none";
           toggleButton.textContent = "+"; // Повертаємо текст кнопки
         }
       });

      return footerList;
    }

    // Рендеримо всі дані
    data.forEach((footerData) => {
      const footerElement = createFooter(footerData);
      footerContainer.appendChild(footerElement);
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });


  function updateFooterTitle() {
    const footerTitle = document.querySelector('.footer-title');
    
    if (window.innerWidth <= 1439) {
      footerTitle.textContent = "FAQ's"; // Мобільна версія
    } else {
      footerTitle.textContent = "Frequently Asked Questions"; // Десктопна версія
    }
  }
  
  // Викликаємо функцію при завантаженні сторінки
  updateFooterTitle();
  
  // Викликаємо функцію при зміні розміру вікна
  window.addEventListener('resize', updateFooterTitle);
