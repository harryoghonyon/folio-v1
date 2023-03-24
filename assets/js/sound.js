const audio = new Audio("/assets/audio/mixkit-plastic-bubble-click-1124.wav");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("mouseover", () => audio.play());
});

document.querySelectorAll(".footer-nav-links-wrap .links").forEach((link) => {
  link.addEventListener("mouseover", () => audio.play());
});

document.querySelectorAll(".email-txt-link").forEach((emailLink) => {
  emailLink.addEventListener("mouseover", () => audio.play());
});
