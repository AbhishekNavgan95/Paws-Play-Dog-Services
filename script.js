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

gsap.from(".about-heading", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".about-heading",
    scroller: "body",
    start: "top 70%",
  },
});

gsap.from(".about-intro-1", {
    opacity: 0,
    x: -70,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".about-intro-1",
        scroller: "body",
        start: "top 70%",
    },
});

gsap.from(".about-intro-2", {
    opacity: 0,
    x: 70,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".about-intro-2",
        scroller: "body",
        start: "top 70%",
    },
});

gsap.from(".services-heading", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".services-heading",
    scroller: "body",
    start: "top 70%",
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
      start: "top 70%",
    },
});

gsap.from(".services-part-2", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
    trigger: ".services-part-2",
    scroller: "body",
    start: "top 70%",
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
    start: "top 70%",
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
        start: "top 70%",
    },
});

gsap.from(".contact-heading", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".contact-heading",
    scroller: "body",
  },
});

gsap.from(".contact-data-1", {
  opacity: 0,
  x: -70,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".contact-data-1",
    scroller: "body",
  },
});

gsap.from(".contact-data-2", {
  opacity: 0,
  x: 70,
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