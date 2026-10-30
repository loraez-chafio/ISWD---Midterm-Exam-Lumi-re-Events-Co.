# Lumière Events & Co.



## About

Lumière Events & Co. is a fictional event services business website featuring catering, event hosting, clown entertainment, and photoshoots. It gives visitors an attractive, responsive way to explore services and complete a sample contact form.

## Design System

### Palette (60-30-10)

| Role | Share | Color | Used for |
|---|---:|---|---|
| Dominant | 60% | `#5C7057` | Primary brand color, buttons, and key elements |
| Secondary | 30% | `#89A482` | Supporting surfaces and decorative elements |
| Supporting shade | — | `#ACC5A6` | Borders, details, and soft highlights |
| Accent | 10% | `#D1EDD3` | Mint highlights and dark-mode accents |

The palette uses a green, nature-inspired theme. Neutral cream backgrounds and dark ink text provide visual balance and help maintain readability.

### Visual style

**Style chosen:** Minimalism

**Why I chose it:** The minimalist style uses clean typography, generous spacing, simple navigation, and uncluttered service cards to make event services easy to explore.

### Contrast check

**Primary body text:** `#202820` on `#F7FAF5`

**Approximate contrast ratio:** 13.6:1

**Requirement:** At least 4.5:1 for normal-sized text.

**Tool to verify:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

Also check text and button combinations in dark mode, and white text on the forest-green background. Verify the final combinations using the contrast checker before submitting. The contrast ratio above is an estimate and should be confirmed with the tool.

## Features

-  Mobile-first responsive layout
-  Semantic HTML5 structure
-  Tailwind CSS v4 CDN
-  Reusable Tailwind component classes using `@apply`
-  Dark mode toggle on the HTML element
-  Saved theme preference with `localStorage`
-  GSAP page-load intro timeline
-  Staggered animations and overlapping timeline steps
-  Replay Intro button
-  Scroll reveals on each section below the hero
-  Scroll progress bar using ScrollTrigger `scrub`
-  Reduced-motion support through `gsap.matchMedia()`
-  Contact form with associated labels and required fields
-  Responsive mobile navigation
-  Form validation feedback for demonstration purposes

## Built With

- HTML5
- Tailwind CSS v4 via CDN
- Vanilla JavaScript
- GSAP 3.13.0
- GSAP ScrollTrigger 3.13.0

No other JavaScript libraries or frameworks are used.

## Project Files


lumiere-events/
├── index.html
├── script.js
└── README.md


## How to Run Locally

1. Open the project folder in Visual Studio Code.
2. Make sure all three files are in the same folder.
3. Open `index.html` using the Live Server extension.
4. Test the site at phone, tablet, and desktop widths.
5. Test the dark-mode toggle, Replay Intro button, section reveals, progress bar, and contact form.

An internet connection is required to load the CDN scripts and remote images.

## Images

The images are loaded through direct URLs in `index.html`. Replace an image URL inside an `<img src="...">` attribute to use another hosted image. No additional image folder is required.

## Contact Form

The contact form is a front-end demonstration. The browser validates the required fields and JavaScript displays feedback, but no message is sent or saved because no backend is connected.

