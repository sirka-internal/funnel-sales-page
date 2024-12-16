function changeImage(thumbnail) {
    const mainImage = document.getElementById("main-image");
    mainImage.src = thumbnail.src;

    document
      .querySelectorAll(".thumbnail")
      .forEach((img) => img.classList.remove("active"));
    thumbnail.classList.add("active");
  }

  // Дані у форматі JSON
fetch("./js/threeStepSystem-data.json")
.then((response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then((data) => {

  console.log("data", data)
  // Контейнер для секції
  const tssFaqContainer = document.querySelector(".three-step-system-about-faq-wrap");

  function createList(listData) {
    const tssList = document.createElement("li");
    tssList.classList.add("tss-faq-list");

    tssList.innerHTML = `
    <span class="tss-faq-title-wrap">
   <p class="tss-faq-title"> ${listData.title} </p>
<button class="tss-faq-toggle-button">+</button>
</span>
<p class="tss-faq-description" style="display: none;"> ${listData.description} </p>
   `;

     // Додаємо функціонал для кнопки
     const toggleButton = tssList.querySelector(".tss-faq-toggle-button");
     const descriptionElement = tssList.querySelector(".tss-faq-description");

     toggleButton.addEventListener("click", () => {
       if (descriptionElement.style.display === "none") {
         descriptionElement.style.display = "block";
         toggleButton.textContent = "-"; // Міняємо текст кнопки
       } else {
         descriptionElement.style.display = "none";
         toggleButton.textContent = "+"; // Повертаємо текст кнопки
       }
     });

    return tssList;
  }

  // Рендеримо всі дані
  data.forEach((listData) => {
    const listElement = createList(listData);
    tssFaqContainer.appendChild(listElement);
  });
})
.catch((error) => {
  console.error("Error loading JSON:", error);
});