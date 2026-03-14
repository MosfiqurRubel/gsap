let initialPath = `M 10 130 Q 250 130 490 130`;

let finalPath = `M 10 130 Q 250 130 490 130`;

let string = document.querySelector("#string");

string.addEventListener("mousemove", (dots) => {
  console.log(dots.x, dots.y);
  let newPath = `M 10 130 Q ${dots.x} ${dots.y} 490 130`;
  gsap.to("svg path", {
    attr: { d: newPath },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});
