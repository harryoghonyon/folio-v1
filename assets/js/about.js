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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("transform");
      } else {
        entry.target.classList.remove("transform");
      }
    });
  },
  { threshold: [0, 0.5, 0.75, 1] }
);

observer.observe(document.querySelector(".cards-container"));

let index = 0;

function flipCards() {
  const images = document.querySelectorAll(".cards-container img");

  const width = window.innerWidth;

  if (width < 768) {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      if (i === index) {
        image.style.opacity = 1;
        image.style.zIndex = 2;
        image.classList.add("enter");
      } else {
        image.style.zIndex = 1;
        image.style.opacity = 0.5;
        image.classList.remove("enter");
      }
    }

    index++;
    if (index > images.length - 1) index = 0;
  }
}

setInterval(flipCards, 2000);
