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
      "Propcheck provides reliable property verification services in Nigeria. We meticulously authenticate ownership, verify documentation, and conduct thorough inspections to ensure transparency and security for property transactions. Trust Propcheck for peace of mind in your real estate endeavors...",
    buttonText: "READ MORE",
  },
  {
    heading: "Documentation",
    description:
      "Propcheck ensures seamless property documentation in Nigeria. Our expert team meticulously reviews and authenticates all paperwork, guaranteeing legal compliance and transparency. Trust us to streamline your documentation process for peace of mind in your property transactions...",
    buttonText: "READ MORE",
  },
  {
    heading: "Manage Crisis",
    description:
      "Propcheck offers expert crisis management services for property disputes in Nigeria. Our skilled team navigates conflicts with precision, providing strategic solutions to resolve crises swiftly and effectively, ensuring peace of mind for property owners...",
    buttonText: "READ MORE",
  },
];

let currentIndex = 0;

function updateContent() {
  const currentSection = sections[currentIndex];
  const textContainer = document.querySelector(".text-container");

  const maxLength = 220;
  let truncatedDescription = currentSection.description.slice(0, maxLength);
  if (currentSection.description.length > maxLength) {
    truncatedDescription += "...";
  }

  textContainer.innerHTML = `
  <h2 class="verify-heading">${currentSection.heading}</h2>
  <p class="verify-desc">${truncatedDescription}</p>
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
      page = "./verify.html";
      break;
    case 1:
      page = "./document.html";
      break;
    case 2:
      page = "./crisis.html";
      break;
    default:
      page = "";
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

function autoChangeSection() {
  setInterval(nextClick, 6000);
}

autoChangeSection();

updateContent();

// routes
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".user-info .btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "./login.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("aboutus")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "./aboutus.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".get-started .getstarted")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "./getstarted.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".get-started-mobile .getstarted ")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "./getstarted.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".about-text .about-us-btn ")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "./aboutus.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".get-btn .getstarted ")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "./getstarted.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".bac .abt ")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "./aboutus.html";
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

let autoChangeInterval;

imgs.forEach((imgSrc, idx) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "properties";
  img.classList.add("img");
  
  img.addEventListener("mouseover", () => {
    img.style.filter = "brightness(50%)"; // darken the image
    const detailsText = document.createElement("div");
    detailsText.innerText = "View Details";
    detailsText.classList.add("details-text");
    img.parentNode.appendChild(detailsText); // append text to parent of image
    clearInterval(autoChangeInterval);
  });
  
  img.addEventListener("mouseout", () => {
    img.style.filter = "brightness(100%)"; // restore brightness
    const detailsText = img.parentNode.querySelector(".details-text");
    if (detailsText) {
      detailsText.remove(); // remove text element
    }
    autoChangeInterval = setInterval(nextClick, 6000);
  });

  img.addEventListener("click", () => {
    window.location.href = "./properties.html";
  });

  slide.appendChild(img);
  carouselContainer.appendChild(slide);
});


// Function to change section automatically
function nextClick() {
  currentIndex = (currentIndex + 1) % sections.length;
  updateContent();
}

// Start the auto sliding initially
autoChangeInterval = setInterval(nextClick, 6000);


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

  const handleCookieConsent = () => {
    cookieWarning.style.display = "none";
  };

  const cookieConsent = localStorage.getItem("cookieConsent");

  if (!cookieConsent) {
    cookieWarning.style.display = "block";
  }

  cookieButton.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", true);
    handleCookieConsent();
  });
});

window.onload = function () {
  var cookieWarning = document.getElementById("cookieWarning");
  cookieWarning.style.display = "block";
};
