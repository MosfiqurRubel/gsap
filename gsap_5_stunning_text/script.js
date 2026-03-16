const breakText = () => {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  console.log(h1Text);

  let splitedText = h1Text.split("");
  let halfValue = Math.floor(splitedText.length / 2);
  console.log(halfValue);

  let clutter = "";

  splitedText.forEach((elem, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="left">${elem}</span>`;
    } else {
      clutter += `<span class="right">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
};

breakText();

gsap.from("h1 .left", {
  y: 40,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
  stagger: 0.2,
});
gsap.from("h1 .right", {
  y: 40,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
  stagger: -0.2,
});
