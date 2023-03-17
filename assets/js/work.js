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
  //   dol: {
  //     position: 0,
  //     images: [
  //       "Preloader mobile krypt.png",
  //       "Desktop mobile krypt.png",
  //       "Desktop mobile krypt.png",
  //       "Desktop section mobile krypt.png",
  //       "3 screen mobile krypt.png",
  //     ],
  //   },
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

const worksName = document.querySelector(".works-name");
const workProjectDescContainer = document.querySelector(
  ".work-project-desc-container"
);

worksName.addEventListener("click", (e) => {
  workProjectDescContainer.classList.toggle("toggled");
});