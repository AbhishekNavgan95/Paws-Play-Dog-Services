document.querySelector(".services").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("menu-active")
})

document.querySelector(".services").addEventListener("mouseenter", () => {
  document.querySelector(".menu").classList.add("menu-active")
})

document.querySelector(".services").addEventListener("mouseleave", () => {
  document.querySelector(".menu").classList.remove("menu-active")
})

document.querySelector(".menu").addEventListener("mouseover", () => {
  document.querySelector(".menu").classList.add("menu-active")
})

document.querySelector(".menu").addEventListener("mouseleave", () => {
  document.querySelector(".menu").classList.remove("menu-active")
})

gsap.from(".navbar", {
  opacity: 0,
  delay: 0.5,
  duration: 1,
});

gsap.from(".hero-sec", {
  y: 30,
  delay: 0.7,
  opacity: 0,
  duration: 1.5,
});

gsap.from(".services-heading", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".services-heading",
    scroller: "body",
    start: "top 80%",
  },
});

gsap.from(".services-part-1", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
  scrollTrigger: {
      trigger: ".services-part-1",
      scroller: "body",
      start: "top 80%",
    },
});

gsap.from(".services-part-2", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
    trigger: ".services-part-1",
    scroller: "body",
    start: "top 80%",
},
});

gsap.from(".cirtification", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
    trigger: ".cirtification",
    scroller: "body",
    start: "top 80%",
},
});

gsap.from(".team-heading", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".team-heading",
    scroller: "body",
    start: "top 80%",
  },
});

gsap.from(".team-data", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".team-data",
        scroller: "body",
        start: "top 80%",
    },
});

gsap.from(".contact-heading", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".contact-heading",
    scroller: "body",
  },
});

gsap.from(".contact-img", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".contact-heading",
    scroller: "body",
  },
});

gsap.from(".contact-data-1", {
  opacity: 0,
  y: 70,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".contact-data-1",
    scroller: "body",
  },
});

gsap.from(".contact-data-2", {
  opacity: 0,
  y: 70,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".contact-data-2",
    scroller: "body",
  },
});

gsap.from(".footer", {
  opacity: 0,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
  },
});