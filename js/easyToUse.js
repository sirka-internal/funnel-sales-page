document.addEventListener("DOMContentLoaded", () => {
    const imagesContainer = document.getElementById("easy-to-use-images-container");
    const images = document.querySelectorAll(".easy-to-use-image");
    const prevButton = document.getElementById("easy-to-use-prev");
    const nextButton = document.getElementById("easy-to-use-next");
  
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
