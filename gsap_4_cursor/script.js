let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let image = document.querySelector(".image");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    // easing: "power2.out",
    ease: "back.out(1.7)",
  });
});

image.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  });
});

image.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "white",
  });
});
