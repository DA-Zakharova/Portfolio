gsap.to(".hi", {
    text: "Hello! I'm Daria.",
    duration: 1.5,
    ease: "power1.in"
});

gsap.to(".dev", {
    text: "I'm a frontend developer.",
    duration: 1.5,
    delay: 2,
    ease: "power1.in"
});

gsap.to(".header", {
    y: 10,
    ease: "bounce",
    duration: 2,
    opacity: 1,
    delay: 4,
});

gsap.fromTo('.cv', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 4, opacity: 1, scale: 1, rotation: 0 });

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text").forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
        trigger: el,
        start: "top 95%",
        toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

gsap.utils.toArray(".skill").forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        y: 30,
        duration: 0.9,
        delay: i * 0.1,
        ease: "power2.out"
    });
});


gsap.utils.toArray(".project-card").forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 1.5,
        delay: i * 0.2,
        ease: "power2.out",
        scale: 1.5,
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#contact",
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
        }
    }
);


const chevron = document.querySelector(".chevron");
const menu = document.querySelector(".menu");

chevron.addEventListener("click", () => {
    menu.classList.toggle("show");
});





