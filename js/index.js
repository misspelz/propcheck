function toggleMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display =
    mobileMenu.style.display === "none" || mobileMenu.style.display === ""
      ? "flex"
      : "none";
}

const sections = [
  {
    heading: "Verification",
    description:
      "Duis aute irure dolor in reprehenderit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Ut enim ad minim veniam...",
    buttonText: "READ MORE",
  },
  {
    heading: "Documentation",
    description:
      "Duis aute irure dolor in reprehenderit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Ut enim ad minim veniam...",
    buttonText: "READ MORE",
  },
  {
    heading: "Manage Crisis",
    description:
      "Duis aute irure dolor in reprehenderit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Ut enim ad minim veniam...",
    buttonText: "READ MORE",
  },
];

let currentIndex = 0;

function updateContent() {
  const currentSection = sections[currentIndex];
  const textContainer = document.querySelector(".text-container");

  textContainer.innerHTML = `
  <h2 class="verify-heading">${currentSection.heading}</h2>
  <p class="verify-desc">${currentSection.description}</p>
  <button class="readmore-btn" onclick="redirectToPage(${currentIndex})">
    ${currentSection.buttonText}
  </button>
  
  <div class="nav-buttons">
    <div onclick="prevClick()" class="prev"><p><<<</p></div>
    <div onclick="nextClick()" class="next"><p>>>></p></div>
  </div>
`;
}

function redirectToPage(index) {
  let page = "";
  switch (index) {
    case 0:
      page = "verify.html";
      break;
    case 1:
      page = "document.html";
      break;
    case 2:
      page = "crisis.html";
      break;
    default:
      page = ""; // Default page if index is out of range
  }
  window.location.href = `/${page}`;
}

function prevClick() {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  updateContent();
}

function nextClick() {
  currentIndex = (currentIndex + 1) % sections.length;
  updateContent();
}

updateContent();

// routes
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".user-info .btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/login.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("aboutus")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/aboutus.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".get-started .getstarted")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/getstarted.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".get-started-mobile .getstarted ")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/getstarted.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".about-text .about-us-btn ")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/aboutus.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".get-btn .getstarted ")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/getstarted.html";
    });
});
// routes

// properties section
const imgs = [
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7363090/pexels-photo-7363090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7119036/pexels-photo-7119036.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/7119036/pexels-photo-7119036.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const carouselContainer = document.querySelector(".properties-image-wrapper");

const parentContainer = document.createElement("div");
parentContainer.classList.add("abs-top-main-child");

carouselContainer.parentNode.insertBefore(parentContainer, carouselContainer);
parentContainer.appendChild(carouselContainer);

imgs.forEach((imgSrc, idx) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "properties";
  img.classList.add("img");
  slide.appendChild(img);
  carouselContainer.appendChild(slide);
});

// Testimonials

const testimonialsData = [
  {
    name: "Michael Samson",
    testimonial:
      "Thanks for propcheck for their timeline intervention. If not, I would have lost my property to scammers and that would be my end. They are the right plug to secure your properties.",
  },
  {
    name: "Jane Smith",
    testimonial:
      "I couldn't be happier with the services provided by propcheck. Their attention to detail and commitment to customer satisfaction are unmatched. Highly recommended!",
  },
  {
    name: "Barr. Bob Johnson",
    testimonial:
      "Propcheck exceeded my expectations in securing my property. The team is professional, efficient, and trustworthy. I'll definitely use their services again!",
  },
];

let currIndex = 0;

function updateTestimonialContent() {
  const currentSection = testimonialsData[currIndex];
  const textContainer = document.querySelector(".testimonials-container");

  textContainer.innerHTML = `
  <p class="testimonial-desc">${currentSection.testimonial}</p>
  <h3 class="testimonial-name">${currentSection.name}</h3>
  <div class="test-buttons">
    <div onclick="previousClick()" class="prev"><p><<<</p></div>
    <div onclick="nexttClick()" class="next"><p>>>></p></div>
  </div>
  
`;
}

function previousClick() {
  currIndex =
    (currIndex - 1 + testimonialsData.length) % testimonialsData.length;
  updateTestimonialContent();
}

function nexttClick() {
  currIndex = (currIndex + 1) % testimonialsData.length;
  updateTestimonialContent();
}

updateTestimonialContent();

// FOOTER
document.addEventListener("DOMContentLoaded", function () {
  const cookieWarning = document.getElementById("cookieWarning");
  const cookieButton = document.getElementById("cookieButton");

  // Function to handle user consent to cookies
  const handleCookieConsent = () => {
    cookieWarning.style.display = "none";
    // You can also save the user's consent in a cookie or localStorage
  };

  // Check if cookie consent is stored
  const cookieConsent = localStorage.getItem("cookieConsent");

  if (!cookieConsent) {
    cookieWarning.style.display = "block";
  }

  cookieButton.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", true);
    handleCookieConsent();
  });
});


 // JavaScript to handle the sliding animation
 window.onload = function() {
  var cookieWarning = document.getElementById("cookieWarning");
  cookieWarning.style.display = "block";
}