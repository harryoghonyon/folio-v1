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

setInterval(time, 1000);

const work_images = {
  krypt: {
    position: 0,
    images: [
      "Preloader mobile krypt.png",
      "Desktop mobile krypt.png",
      "Desktop mobile krypt.png",
      "Desktop section mobile krypt.png",
      "3 screen mobile krypt.png",
    ],
  },
  wellfed: {
    position: 0,
    images: [
      "Wellfed home cover.png",
      "Wellfed sections cover.png",
      "Wellfed sections other cover.png",
      "Wellfed mobile cover.png",
    ],
  },
};

const renderImages = (id, images, position) => {
  document.getElementById(id).innerHTML = `
                <img
                  class="work-img"
                  src="./assets/img/${images[position]}"
                  alt=""
                  loading="lazy"
                />
    `;
};

setInterval(() => {
  document.querySelectorAll(".work-img-wrap").forEach((element) => {
    const work_items = work_images[element.id];
    renderImages(element.id, work_items.images, work_items.position);

    if (work_images[element.id].position + 1 >= work_items.images.length) {
      work_images[element.id].position = 0;
    } else {
      work_images[element.id].position += 1;
    }
  });
}, 2000);

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
