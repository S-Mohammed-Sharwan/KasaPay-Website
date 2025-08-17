document.addEventListener("DOMContentLoaded", () => {
  // ===== Year =====
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== Smooth scroll for same-page nav =====
  document.querySelectorAll(".main-nav a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("href").replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // ===== Hamburger menu toggle =====
  const hamburger = document.querySelector(".hamburger");
  const navOverlay = document.querySelector(".nav-overlay");

  if (hamburger && navOverlay) {
    hamburger.addEventListener("click", () => {
      document.querySelector(".main-nav").classList.toggle("active");
      hamburger.classList.toggle("active");
      navOverlay.classList.toggle("active");
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!expanded));
    });

    navOverlay.addEventListener("click", () => {
      document.querySelector(".main-nav").classList.remove("active");
      hamburger.classList.remove("active");
      navOverlay.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  }

  // ===== Banner Slider =====
  let currentSlide = 0;
  const slides = document.querySelectorAll(".banner-slider .slide");
  const dotsContainer = document.querySelector(".dots");

  if (slides.length > 0 && dotsContainer) {
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
      });
    }

    function goToSlide(index) {
      currentSlide = index;
      updateSlider();
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }

    updateSlider();
    setInterval(nextSlide, 3000);
  }

  // ===== Lightbox for Event Photos =====
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox?.querySelector("img");
  const eventImages = document.querySelectorAll(
    ".event-photos img, .event-gallery img, .events-grid img"
  );

  if (lightbox && lightboxImg) {
    eventImages.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  // ===== Government Payable Apps Section =====
  const govtAppsData = [
    { name: "Bharat BillPay", url: "https://www.bharatbillpay.com" },
    { name: "BHIM UPI", url: "https://www.bhimupi.org.in" },
    { name: "Paytm", url: "https://paytm.com" },
    { name: "Google Pay", url: "https://pay.google.com" },
    { name: "PhonePe", url: "https://www.phonepe.com" },
  ];

  const govtAppsContainer = document.getElementById("govtAppsList");
  if (govtAppsContainer) {
    govtAppsData.forEach((app) => {
      const link = document.createElement("a");
      link.href = app.url;
      link.textContent = app.name;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.add("govt-app-link");
      govtAppsContainer.appendChild(link);
    });
  }

  // ===== Simple contact form (frontend only) =====
  window.submitForm = function (e) {
    e.preventDefault();
    const name = document.getElementById("name")?.value?.trim();
    const email = document.getElementById("email")?.value?.trim();
    const message = document.getElementById("message")?.value?.trim();
    const msgEl = document.getElementById("formMsg");

    if (!name || !email || !message) {
      msgEl.style.color = "crimson";
      msgEl.textContent = "Please fill all fields.";
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      msgEl.style.color = "crimson";
      msgEl.textContent = "Please enter a valid email address.";
      return false;
    }

    msgEl.style.color = "green";
    msgEl.textContent = "Sending message...";

    setTimeout(() => {
      msgEl.textContent = "Thanks! Your message has been sent.";
      document.getElementById("contactForm").reset();
    }, 900);

    return false;
  };

  // ===== Fetch backend message =====
  fetch("/api/message")
    .then((res) => res.json())
    .then((data) => {
      const msgEl = document.getElementById("backendMessage");
      if (msgEl) {
        msgEl.textContent = `${data.message} (Time: ${data.time})`;
      }
    })
    .catch((err) => {
      console.error("Error fetching backend message:", err);
      const msgEl = document.getElementById("backendMessage");
      if (msgEl) {
        msgEl.textContent = "Failed to load backend message.";
      }
    });
});
