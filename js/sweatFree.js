document.addEventListener("DOMContentLoaded", () => {
    const blocksContainer = document.getElementById("sweat-free-images-container");
    const blocks = document.querySelectorAll(".sweat-free-about-wrap");
    const prevButton = document.getElementById("sweat-free-prev");
    const nextButton = document.getElementById("sweat-free-next");
  
    let currentIndex = 0;
  
    function updateSlide() {
      const offset = -currentIndex * blocks[0].clientWidth;
      blocksContainer.style.transform = `translateX(${offset}px)`;
    }
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + blocks.length) % blocks.length; // Перехід до останнього зображення, якщо на початку
      updateSlide();
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % blocks.length; // Перехід до першого зображення, якщо в кінці
      updateSlide();
    });
  
    // Перевірка на зміну розміру вікна для правильного відображення
    window.addEventListener("resize", updateSlide);
  });
