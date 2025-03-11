// loader //
// document.addEventListener("DOMContentLoaded", function () {
//   let countElement = document.getElementById("count");
//   let progressBar = document.querySelector(".progress-bar");
//   let loaderWrapper = document.querySelector(".loader-wrapper");

//   let loadProgress = 0;
//   let interval = setInterval(() => {
//     loadProgress += 1;
//     countElement.textContent =
//       loadProgress < 10 ? "0" + loadProgress : loadProgress;
//     progressBar.style.width = loadProgress + "%";

//     if (loadProgress >= 100) {
//       clearInterval(interval);
//       setTimeout(() => {
//         loaderWrapper.classList.add("hide-loader"); // Hide the loader

//         // Play GSAP animation after loader is hidden
//         gsap.from(".a1", {
//           y: 30,
//           opacity: 0,
//           stagger: 0.2,
//           duration: 0.5,
//           delay: 0.4,
//         });
//       }, 500); // Delay before hiding the loader
//     }
//   }, 20);
// });

document.addEventListener("DOMContentLoaded", function () {
  let countElement = document.getElementById("count");
  let progressBar = document.querySelector(".progress-bar");
  let loaderWrapper = document.querySelector(".loader-wrapper");

  function updateProgress(percentage) {
    let progress = Math.min(percentage, 100);
    countElement.textContent = progress < 10 ? "0" + progress : progress;
    progressBar.style.width = progress + "%";
  }

  function simulateLoading() {
    let totalResources = performance.getEntriesByType("resource").length || 50; // Fallback if no resources detected
    let loadedResources = 0;

    function checkProgress() {
      let newLoadedResources = performance.getEntriesByType("resource").length;
      loadedResources = Math.min(newLoadedResources, totalResources);

      let loadPercentage = Math.floor((loadedResources / totalResources) * 100);
      updateProgress(loadPercentage);

      if (loadPercentage < 100) {
        requestAnimationFrame(checkProgress);
      } else {
        setTimeout(() => {
          loaderWrapper.classList.add("hide-loader");

          // Play GSAP animation after loader is hidden
          gsap.from(".a1", {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
            delay: 0.4,
          });
        }, 500);
      }
    }

    checkProgress();
  }

  window.addEventListener("load", simulateLoading);
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

// scroll to top //
document.querySelector(".up-arrow").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

gsap.to(".up-arrow", {
  scrollTrigger: {
    trigger: ".section2",
    markers: false,
    start: "top 80%",
    end: "10% 50%",
    scrub: true,
  },
  rotate: "180deg",
  duration: 0.5,
});

gsap.to(".up-arrow i", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none reverse",
    duration: 0.5,
    onEnter: () => gsap.to(".up-arrow i", { color: "#ffff" }),
    onLeaveBack: () => gsap.to(".up-arrow i", { color: "" }),
  },
});

//section1 animations //
