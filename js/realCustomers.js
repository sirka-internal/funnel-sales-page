document.addEventListener("DOMContentLoaded", () => {
    const imagesContainer = document.getElementById("images-container");
    const images = document.querySelectorAll(".real-customers-slide-image");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
  
    let currentIndex = 0;
  
    function updateSlide() {
      const offset = -currentIndex * images[0].clientWidth;
      imagesContainer.style.transform = `translateX(${offset}px)`;
    }
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Перехід до останнього зображення, якщо на початку
      updateSlide();
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length; // Перехід до першого зображення, якщо в кінці
      updateSlide();
    });
  
    // Перевірка на зміну розміру вікна для правильного відображення
    window.addEventListener("resize", updateSlide);
  });
