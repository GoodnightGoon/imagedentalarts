const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-list")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle("open");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header_content div", {
    duration: 1000,
    delay: 500,
  });

  ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 1000,
  });  

  ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".deals_card", {
    ...scrollRevealOption,
    interval: 500,
  });


  ScrollReveal().reveal(".about_video", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".about_card", {
    duration: 1000,
    interval: 500,
    delay: 500,
  });

  ScrollReveal().reveal(".deal_img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".deals_card", {
    duration: 1000,
    interval: 500,
    delay: 500,
  });

  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-right');
    
    cards.forEach(card => {
        let index = 0;
        const images = card.querySelectorAll('img');
        const totalImages = images.length;

        const changeImage = () => {
            images.forEach((img, i) => img.classList.remove('active'));
            images[index].classList.add('active');
            index = (index + 1) % totalImages;
        };

        let interval = setInterval(changeImage, 2000);

        card.addEventListener('mouseenter', () => clearInterval(interval));
        card.addEventListener('mouseleave', () => interval = setInterval(changeImage, 2000));
    });

    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const totalCards = document.querySelectorAll('.card').length;

    const updateCarousel = () => {
        const cardWidth = carousel.querySelector('.card').clientWidth;
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
});



