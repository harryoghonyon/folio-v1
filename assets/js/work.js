var span = document.getElementById("time-location");
var hoursSpan = document.getElementById("hours");
var minutesSpan = document.getElementById("minutes");

function time() {
  var d = new Date();
  var options = { timeZone: "Africa/Lagos", hour12: false };
  var timeString = d.toLocaleString("en-US", options);
  var timeParts = timeString.split(" ");
  var timeValues = timeParts[1].split(":");
  hoursSpan.textContent = timeValues[0];
  minutesSpan.textContent = timeValues[1];
}

setInterval(time, 1000);

// const worksName = document.querySelector(".works-name");
// const workProjectDescContainer = document.querySelector(
//   ".work-project-desc-container"
// );

// worksName.addEventListener("click", (e) => {
//   workProjectDescContainer.classList.toggle("toggled");
// });

document.querySelectorAll(".header-work-details-wrap").forEach((element) => {
  element.addEventListener("click", (e) => {
    element.parentElement.nextElementSibling.classList.toggle("toggled");
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
  let index = 0;
  const images = document.querySelectorAll(`#${carousel.id} .mobile img`);
  const imagecontainer = document.querySelector(`#${carousel.id} .mobile`);

  let forward = true;

  function runSlider() {
    const width = window.innerWidth - 48;
    index += forward ? 1 : -1;

    if (index > images.length - 1) {
      forward = false;
      index--;
    }

    if (index === 0) {
      forward = true;
      index++;
    }

    imagecontainer.style.transform = `translateX(${-index * width}px)`;
  }

  setInterval(runSlider, 2000);
});
