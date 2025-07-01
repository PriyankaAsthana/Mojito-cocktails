# 🍸 **Velvet Pour** — The Ultimate Cocktail Experience

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=DM+Serif+Text&size=28&duration=3000&pause=1000&color=9DE39D&center=true&vCenter=true&width=900&lines=Welcome+to+Velvet+Pour!;Smooth.+Stirred.+Sophisticated.;Crafted+to+Flow%2C+Served+to+Feel.%F0%9F%8D%B8"/>
</div>

> ✨ A luxurious cocktail-themed landing site, blending **elegant design**, **responsive motion**, and **GSAP animations** — wrapped in the finest digital velvet. Designed to make your heart clink like ice in a mojito glass.

---

## 🖥️ Live Site

🔗 [**velvetpour.vercel.app**](https://mojito-cocktails-cyan.vercel.app)

![hero-animation](https://your-gif-or-video-preview-url.com)

---

## 🧾 Features

- 🧊 **GSAP ice-cube drop animation** on load
- 🍃 Parallax **floating leaves animation** on scroll
- ✨ Text fade + slide reveals across sections
- 🎩 Classy **hover tilt & pulse** on cocktail cards
- 🖋️ Elegant **custom typography** (`Modern Negra`, `DM Serif Text`, `Mona Sans`)
- 🌈 Fully **responsive layout** across all screen sizes
- 💨 Built with **React + Tailwind v4 + Vite**
- 🎨 Aesthetic color palette with black, mint, and velvet gold accents

---

## 🛠 Tech Stack

<div align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=black"/>
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</div>

---

## 🎥 Core Animations

```jsx
// 🍸 Ice cube drop effect
useEffect(() => {
  gsap.from(".ice-cube", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: "bounce.out",
  });
}, []);

// ✨ Section fade-in with scroll trigger
useEffect(() => {
  gsap.from(".section", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".section",
      start: "top 85%",
    },
  });
}, []);

// 🌿 Floating leaves (looping parallax)
gsap.to(".leaf", {
  y: 10,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "sine.inOut"
});

// 💫 Cocktail card tilt on hover (VanillaTilt or GSAP hover)
```

---

## 🖼️ Screenshots

| 🖥️ Desktop | 📱 Mobile |
|------------|-----------|
| ![desktop](https://your-image-url.com/desktop.png) | ![mobile](https://your-image-url.com/mobile.png) |

---

## 📂 Folder Structure

```
VelvetPour/
├── public/
│   ├── images/       # Leaves, backgrounds, ice
│   └── icons/        # Social icons
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Cocktails.jsx
│   │   ├── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/velvet-pour.git
cd velvet-pour
npm install
npm run dev
```

---

## 📌 Upcoming Enhancements

- 🧃 Cocktail cards with 3D hover animations
- 🔍 Interactive live search with GSAP results reveal
- 🍋 Liquid motion effect on scroll (clip path morphing)
- 💌 Contact form modal with animated success tick
- 🎶 Optional soft background jazz toggle 🎷

---

## ✒️ Credits

- 👩‍💻 Design & Development: [**Priyanka Asthana**](https://github.com/your-username)
- Fonts: [Modern Negra](https://fonts.google.com/specimen/DM+Serif+Text), [Mona Sans](https://github.com/github/mona-sans)
- Icons: [Lucide](https://lucide.dev/), [Feather Icons](https://feathericons.com/)
- Animations: [GSAP](https://greensock.com/gsap/)

---

## 🪪 License

Licensed under the MIT License.

---

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=DM+Serif+Text&size=20&duration=4000&pause=1000&color=9DE39D&center=true&vCenter=true&width=600&lines=Crafted+with+GSAP%2C+Styled+with+Tailwind.;Polished+by+Priyanka+Asthana.;Sip+the+Design.+Stir+the+Code.+%F0%9F%8D%B8"/>
</div>
