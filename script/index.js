// loader //
document.addEventListener("DOMContentLoaded", function () {
  let countElement = document.getElementById("count");
  let progressBar = document.querySelector(".progress-bar");
  let loaderWrapper = document.querySelector(".loader-wrapper");

  // Disable scrolling while loader is running
  document.body.style.overflow = "hidden";

  let loadProgress = 0;
  let interval = setInterval(() => {
    loadProgress += 1;
    countElement.textContent =
      loadProgress < 10 ? "0" + loadProgress : loadProgress;
    progressBar.style.width = loadProgress + "%";

    if (loadProgress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loaderWrapper.classList.add("hide-loader"); // Hide the loader

        // Enable scrolling again
        document.body.style.overflow = "auto";

        // Play GSAP animation after loader is hidden
        gsap.from(".a1", {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.5,
          delay: 0.4,
        });
      }, 500); // Delay before hiding the loader
    }
  }, 20);
});

// contact form //
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Create a new FormData object to collect form data
    const formData = new FormData(event.target);

    // Send the data using Fetch API (can also use Axios or other libraries)
    fetch("https://gmbemailsender.vercel.app/api/contact", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Check if the response status is 200 (OK)
        if (response.status === 200) {
          window.location.href = "thanku.html";
        } else {
          throw new Error("Failed to submit form. Status: " + response.status);
        }
      })

      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
      });
  });

//header//
document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.querySelector(".menu-bar");
  const headerWrapper = document.querySelector(".header2-wrapper");
  const closeBtn = document.querySelector(".header2-wrapper .ph-x-circle");
  const body = document.body;

  menuBar.addEventListener("click", function () {
    headerWrapper.classList.toggle("show-header");

    if (headerWrapper.classList.contains("show-header")) {
      body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      body.style.overflow = ""; // Allow scrolling
    }
  });

  closeBtn.addEventListener("click", function () {
    headerWrapper.classList.remove("show-header");
    body.style.overflow = ""; // Allow scrolling
  });
});

// scroll to top upp arrow animations //
document.addEventListener("DOMContentLoaded", function () {
  const upArrow = document.querySelector(".up-arrow");

  if (upArrow) {
    // Scroll to top on click
    upArrow.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Rotate up-arrow on scroll
    window.addEventListener("scroll", function () {
      let scrollValue = window.scrollY; // Get current scroll position
      let rotation = gsap.utils.clamp(0, 180, (scrollValue / 500) * 180);

      gsap.to(".up-arrow", {
        rotate: rotation,
        duration: 0.1, // Short duration to create scrub-like effect
        ease: "none",
      });
    });

    // Change up-arrow color when reaching footer
    const footer = document.querySelector(".footer");
    const upArrowIcon = document.querySelector(".up-arrow i");

    if (footer && upArrowIcon) {
      let originalColor = getComputedStyle(upArrowIcon).color;

      window.addEventListener("scroll", function () {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (footerRect.top < windowHeight && footerRect.bottom > 0) {
          gsap.to(upArrowIcon, { color: "var(--white)", duration: 0.1 });
        } else {
          gsap.to(upArrowIcon, { color: originalColor, duration: 0.1 });
        }
      });
    }
  }
});

//section4 svg animation index//
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const section4 = document.querySelector(".section4");

  if (section4) {
    gsap.to(".section4", {
      scrollTrigger: {
        trigger: ".section4",
        start: "50px 100px",
        pin: false,
      },
    });

    const svgPaths = document.querySelectorAll(".section4 svg path");

    if (svgPaths.length > 0) {
      gsap.fromTo(
        svgPaths,
        { strokeDasharray: 3000, strokeDashoffset: -3000 }, // Start state
        {
          strokeDashoffset: 0, // Draw animation
          duration: 3, // Animation duration
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section4",
            start: "top center",
          },
        }
      );
    }
  }
});

// service page animation//

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // if (window.innerWidth > 991) {
  //   // Adjust breakpoint as needed
  //   const contents = gsap.utils.toArray(
  //     ".section2-services .service-container"
  //   );

  //   gsap.to(contents, {
  //     xPercent: -88 * (contents.length - 1),
  //     scrollTrigger: {
  //       trigger: ".section2-services",
  //       start: "42% center",
  //       pin: true,
  //       scrub: 1,
  //     },
  //   });
  // }
  if (window.innerWidth > 991) {
    const contents = gsap.utils.toArray(
      ".section2-services .service-container"
    );

    let xPercentValue;

    if (window.innerWidth >= 992 && window.innerWidth <= 1191) {
      xPercentValue = -100 * (contents.length - 1);
    } else if (window.innerWidth >= 1192 && window.innerWidth <= 1366) {
      xPercentValue = -95 * (contents.length - 1);
    } else if (window.innerWidth >= 1500) {
      xPercentValue = -88 * (contents.length - 1);
    }

    gsap.to(contents, {
      xPercent: xPercentValue,
      scrollTrigger: {
        trigger: ".section2-services",
        start: "42% center",
        pin: true,
        scrub: 1,
      },
    });
  }
});

// footer line animation//
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".footer",
    start: "10% center",
    delay: 0.4,
    once: true,
    toggleClass: { targets: ".divider", className: "show-divider" }, // Automatically toggle class
  });
});

//swiper//
document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector(".mySwiper");

  if (swiperContainer) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 50,
        },
      },
    });
  }
});

//service - swiper //
document.addEventListener("DOMContentLoaded", function () {
  const serviceSwiperContainer = document.querySelector(".serviceSwiper");

  if (serviceSwiperContainer) {
    var newSwiper = new Swiper(".serviceSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".new-next", // Unique selectors
        prevEl: ".new-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1500: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const serviceSwiperContainer = document.querySelector(".servicesMain");

  if (serviceSwiperContainer) {
    var newSwiper = new Swiper(".servicesMain", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".servicesmain-next", // Unique selectors
        prevEl: ".servicesmain-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1500: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
});

// policies//
document.addEventListener("DOMContentLoaded", function () {
  let body = document.body;

  // Get modals
  let privacyPolicy = document.getElementById("privacy-policy");
  let termsCondition = document.getElementById("terms-condition");

  // Ensure both modals are hidden on page load
  privacyPolicy.style.display = "none";
  termsCondition.style.display = "none";

  // Function to disable scrolling
  function disableScroll() {
    body.style.overflow = "hidden";
  }

  // Function to enable scrolling
  function enableScroll() {
    body.style.overflow = "";
  }

  // Function to toggle visibility of a modal
  function toggleModal(modal, show) {
    modal.style.display = show ? "block" : "none";

    // Enable/Disable scrolling based on visibility
    if (show) {
      disableScroll();
    } else {
      enableScroll();
    }
  }

  // Show Privacy Policy
  document
    .querySelector(".show-privacy")
    .addEventListener("click", function () {
      toggleModal(privacyPolicy, true);
    });

  // Show Terms & Conditions
  document.querySelector(".show-terms").addEventListener("click", function () {
    toggleModal(termsCondition, true);
  });

  // Close modal when clicking on .ph-x-circle
  document.querySelectorAll(".ph-x-circle").forEach((button) => {
    button.addEventListener("click", function () {
      toggleModal(privacyPolicy, false);
      toggleModal(termsCondition, false);
    });
  });

  // Close modal when clicking outside .policy-content
  document.querySelectorAll(".policy-container").forEach((modal) => {
    modal.addEventListener("click", function (event) {
      if (!event.target.closest(".policy-content")) {
        toggleModal(modal, false);
      }
    });
  });
});
