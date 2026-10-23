

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;

    const darkModeToggle = document.querySelector("#darkModeToggle");
    const themeIcon = document.querySelector("#themeIcon");
    const themeLabel = document.querySelector("#themeLabel");

    const replayBtn = document.querySelector("#replayBtn");
    const progressBar = document.querySelector("#progressBar");

    const mobileMenuToggle = document.querySelector("#mobileMenuToggle");
    const mobileNav = document.querySelector("#mobileNav");

    const contactForm = document.querySelector("#contactForm");
    const formFeedback = document.querySelector("#formFeedback");


    document.querySelector("#currentYear").textContent =
        new Date().getFullYear();


    function updateThemeButton() {
        const isDark = html.classList.contains("dark");

        darkModeToggle.setAttribute("aria-pressed", String(isDark));
        themeIcon.textContent = isDark ? "" : "";
        themeLabel.textContent = isDark ? "Light mode" : "Dark mode";

        darkModeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );
    }

    updateThemeButton();

    darkModeToggle.addEventListener("click", () => {
        const isDark = html.classList.toggle("dark");

        try {
            localStorage.setItem(
                "lumiere-theme",
                isDark ? "dark" : "light"
            );
        } catch (error) {

        }

        updateThemeButton();
    });


    mobileMenuToggle.addEventListener("click", () => {
        const isExpanded =
            mobileMenuToggle.getAttribute("aria-expanded") === "true";

        mobileMenuToggle.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

        mobileMenuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Open navigation menu" : "Close navigation menu"
        );

        mobileNav.classList.toggle("hidden", isExpanded);
        mobileMenuToggle.textContent = isExpanded ? "☰" : "✕";
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileNav.classList.add("hidden");
            mobileMenuToggle.setAttribute("aria-expanded", "false");
            mobileMenuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
            mobileMenuToggle.textContent = "☰";
        });
    });

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        formFeedback.textContent =
            "Thank you! Your demo form passed validation. No message was sent or saved.";

        formFeedback.classList.remove("hidden");
        contactForm.reset();
    });

    const motionSettings = gsap.matchMedia();

    motionSettings.add(
        {
            reduceMotion: "(prefers-reduced-motion: reduce)",
            fullMotion: "(prefers-reduced-motion: no-preference)"
        },
        (context) => {
            const { reduceMotion } = context.conditions;


            if (reduceMotion) {
                gsap.set(
                    [
                        "#heroEyebrow",
                        "#heroTitle",
                        "#heroDescription",
                        "#heroActions",
                        "#heroNote",
                        "#heroVisual",
                        ".reveal"
                    ],
                    {
                        clearProps: "all",
                        autoAlpha: 1
                    }
                );

                gsap.set(progressBar, {
                    scaleX: 1,
                    transformOrigin: "left center"
                });

                progressBar.setAttribute("aria-valuenow", "100");

                return;
            }


            const introTimeline = gsap.timeline({
                defaults: {
                    duration: 0.5,
                    ease: "power3.out"
                }
            });

            introTimeline
                .from("#heroEyebrow", {
                    y: 16,
                    autoAlpha: 0
                })
                .from(
                    "#heroTitle",
                    {
                        y: 28,
                        autoAlpha: 0
                    },
                    "-=0.3"
                )
                .from(
                    "#heroDescription",
                    {
                        y: 18,
                        autoAlpha: 0
                    },
                    "-=0.3"
                )
                .from(
                    "#heroActions > *",
                    {
                        y: 12,
                        autoAlpha: 0,
                        stagger: 0.12
                    },
                    "-=0.25"
                )
                .from(
                    ["#heroNote", "#heroVisual"],
                    {
                        y: 18,
                        autoAlpha: 0,
                        stagger: 0.1,
                        duration: 0.55
                    },
                    "-=0.2"
                );


            replayBtn.addEventListener("click", () => {
                introTimeline.restart();
            });


            gsap.utils.toArray(".reveal").forEach((section) => {
                gsap.from(section, {
                    y: 30,
                    autoAlpha: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });


            gsap.to(progressBar, {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    onUpdate: (self) => {
                        progressBar.setAttribute(
                            "aria-valuenow",
                            String(Math.round(self.progress * 100))
                        );
                    }
                }
            });


            return () => {
                replayBtn.removeEventListener("click", restartIntro);
            };

            function restartIntro() {
                introTimeline.restart();
            }
        }
    );
});
