// loader //
document.addEventListener("DOMContentLoaded", function () {
  let countElement = document.getElementById("count");
  let progressBar = document.querySelector(".progress-bar");
  let loaderWrapper = document.querySelector(".loader-wrapper");

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

//header//
document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.querySelector(".menu-bar");
  const headerWrapper = document.querySelector(".header2-wrapper");
  const closeBtn = document.querySelector(".ph-x-circle");

  menuBar.addEventListener("click", function () {
    headerWrapper.classList.toggle("show-header");
  });

  closeBtn.addEventListener("click", function () {
    headerWrapper.classList.remove("show-header");
  });
});

// scroll to top upp arrow animations //
document.querySelector(".up-arrow").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".up-arrow", {
    scrollTrigger: {
      trigger: ".section2",
      start: "top 80%",
      end: "10% 50%",
      scrub: true,
    },
    rotate: "180deg",
    duration: 0.5,
  });
});

//section4 svg animations //
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".section4", {
    scrollTrigger: {
      trigger: ".section4",
      start: "50px 100px ",
      pin: true,
    },
  });

  gsap.fromTo(
    ".section4 svg path",
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
});

// footer line animation//
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".footer",
    start: "40% center",
    once: true,
    toggleClass: { targets: ".divider", className: "show-divider" }, // Automatically toggle class
  });
});
