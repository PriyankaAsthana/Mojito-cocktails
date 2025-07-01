![readme-cover](https://github.com/user-attachments/assets/e5221214-2045-417f-909a-c6564340f923)

# 🧊✨ **Velvet Pour** — The Ultimate Cocktail Experience

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=DM+Serif+Text&size=28&duration=3000&pause=1000&color=9DE39D&center=true&vCenter=true&width=900&lines=Welcome+to+Velvet+Pour!;Smooth.+Stirred.+Sophisticated.;Crafted+to+Flow%2C+Served+to+Feel.%F0%9F%8D%B8"/>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Design-Luxury-black?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/Motion-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel" />
</p>

> A lush, **cocktail-inspired web experience** that merges artful animation with sleek responsiveness. **Velvet Pour** is where React meets rich motion design — because your digital bar should pour just as smooth as your favorite drink.

---

## 🍸 Live Experience

🔗 [**velvetpour.vercel.app**](https://mojito-cocktails-cyan.vercel.app)

---

## 💎 Features That Sparkle

- 🧊 **Ice-cube drop** GSAP animation
- 🍃 **Leaf float parallax** on load
- ✨ **Scroll-triggered reveals** on all sections
- 🥂 **Cocktail cards** that tilt + bounce
- 📱 Fully responsive design powered by **Tailwind v4**
- 🖋️ Classy typefaces: `Modern Negra`, `DM Serif Text`, `Mona Sans`
- 🌑 Dark layout with **neon mint and velvet gold** accents

---

## ⚙️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black" />
</p>

---

## 🎬 Core Animation Logic

```js
// Hero Ice Cube Entrance
useEffect(() => {
  gsap.from(".ice-cube", {
    y: -100,
    opacity: 0,
    duration: 1.8,
    ease: "bounce.out",
  });
}, []);

// Parallax Leaf Float
gsap.to(".leaf", {
  y: 15,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "sine.inOut",
});

// Scroll Reveal
ScrollTrigger.batch(".reveal", {
  onEnter: (batch) =>
    gsap.from(batch, {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 1,
    }),
});
```

---


## 🧾 Project Structure

```
VelvetPour/
├── public/         → Assets (leaves, logos, fonts)
├── src/
│   ├── components/ → Hero, Cocktails, Contact
│   ├── App.jsx     → App shell
│   └── main.jsx    → Entry point
└── README.md
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/your-username/velvet-pour.git
cd velvet-pour
npm install
npm run dev
```

---

## 🌟 Upcoming Enhancements

- 🌀 Smooth scroll-pour transition between sections
- 📬 Animated modal contact form with toast
- 🔦 Logo flash preloader
- 🎨 Neon pulse effect toggle (light/dark mode)

---

## ✨ Author

> Built & crafted by [**Priyanka Asthana**](https://github.com/your-username) 🍃

- 🔧 Powered by GSAP animations
- 🎨 Inspired by elegant mixology
- 💻 Styled with modern React + Tailwind practices

---

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=DM+Serif+Text&size=20&duration=4000&pause=1000&color=9DE39D&center=true&vCenter=true&width=600&lines=Styled+with+Tailwind.;Animated+with+GSAP.;Coded+by+Priyanka+Asthana.%F0%9F%8D%B8"/>
</div>
