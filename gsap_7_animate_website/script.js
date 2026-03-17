const page1Animation = () => {
  let tl = gsap.timeline();

  tl.from("#logo, .nav-links li, nav button", {
    y: -40,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3",
  );

  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part2 img",
    {
      x: 200,
      opacity: 0,
      delay: -0.3,
      duration: 0.5,
    },
    "-=0.3",
  );

  tl.from(".brands img", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
  });
};

const page2Animation = () => {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-2",
      scroller: "body",
      markers: true,
      start: "top 50%",
      end: "top -75%",
      scrub: 2,
    },
  });

  tl2.from(".services-header", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".item.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim",
  );

  tl2.from(
    ".item.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim",
  );

  tl2.from(
    ".item.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim2",
  );

  tl2.from(
    ".item.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim2",
  );

  tl2.from(
    ".item.line3.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim3",
  );

  tl2.from(
    ".item.line3.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim3",
  );

  tl2.from(
    ".item.line4.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim4",
  );

  tl2.from(
    ".item.line4.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim4",
  );
};

page1Animation();
page2Animation();
