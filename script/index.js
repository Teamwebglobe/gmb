// loader //
document.addEventListener("DOMContentLoaded", function () {
  // Scroll to top on page refresh
  window.scrollTo(0, 0);

  let countElement = document.getElementById("count");
  let progressBar = document.querySelector(".progress-bar");
  let loaderWrapper = document.querySelector(".loader-wrapper");

  let loadStartTime = performance.now(); // Get load start time

  window.onload = function () {
    let loadEndTime = performance.now(); // Get load end time
    let loadDuration = loadEndTime - loadStartTime; // Calculate load duration in milliseconds

    let totalProgress = 100;
    let intervalTime = Math.max(loadDuration / totalProgress, 40); // Set a minimum interval time to avoid excessive speed

    let loadProgress = 0;
    let interval = setInterval(() => {
      loadProgress += 1;
      countElement.textContent =
        loadProgress < 10 ? "0" + loadProgress : loadProgress;
      progressBar.style.width = loadProgress + "%";

      if (loadProgress >= totalProgress) {
        clearInterval(interval);
        setTimeout(() => {
          loaderWrapper.classList.add("hide-loader"); // Add class instead of display: none
        }, 500); // Delay before hiding the loader
      }
    }, intervalTime);
  };
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
