let menu = document.querySelector("nav i");
let close = document.querySelector(".full i");
let tl = gsap.timeline();

tl.to(".full", {
  duration: 0.5,
  right: 0,
});

tl.from(".full h4", {
  x: 80,
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
});

tl.from(".full i", {
  scale: 0,
  duration: 0.5,
  ease: "back.out(1.7)",
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("main")) {
    tl.reverse();
  }
});
