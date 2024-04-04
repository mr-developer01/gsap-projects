var tl = gsap.timeline();
tl.from(".a", {
  y: -80,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.3,
});

tl.from(".text p", {
  y: -70,
  duration: 0.8,
  opacity: 0,
});

tl.from(".text h1", {
  y: 70,
  duration: 0.8,
  opacity: 0,
});

tl.from("footer", {
  y: 100,
  duration: 0.8,
  opacity: 0,
});

tl.from("img", {
  scale: 1.5,
  duration: 0.8,
  opacity: 0,
});
