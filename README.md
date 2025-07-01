![readme-cover](https://github.com/user-attachments/assets/e74d8157-5da6-4ecb-bb25-6638cf9aad0d)
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
- 🍸 Scroll-based **GSAP reveal animations** on sections
- 🖋️ Elegant **custom typography** using `Modern Negra` & `DM Serif Text`
- 🖥️ Fully **responsive layout** across all screen sizes
- 💨 Built with **Tailwind CSS v4** and **React + Vite**
- 🌿 **Leaf image assets** that enhance branding
- ⚡ Smooth **section transitions** and animated social icons
- 🌈 Designed with *love, flow, and minty aesthetics* ✨

---

## 🛠 Tech Stack

<div align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
</div>

---

## 🎥 Key Animations

```jsx
// Ice cube drop
useEffect(() => {
  gsap.from(".ice-cube", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: "bounce.out",
  });
}, []);

// Section fade-in
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
│   ├── images/
│   └── icons/
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

Clone the project and run locally:

```bash
git clone https://github.com/your-username/velvet-pour.git
cd velvet-pour
npm install
npm run dev
```

---

## 📌 Upcoming Enhancements

- 🧃 Filterable cocktail menu by category
- 🔍 Real-time search functionality
- 🍋 Animated liquid pour effect on scroll
- 💌 Contact form + newsletter modal

---

## ✒️ Credits

- 👩‍💻 Design & Development: [**Priyanka Asthana**](https://github.com/your-username)
- Fonts: [Modern Negra](https://fonts.google.com/specimen/DM+Serif+Text), [Mona Sans](https://github.com/github/mona-sans)
- Icons: [Lucide](https://lucide.dev/)
- Animations: [GSAP](https://greensock.com/gsap/)

---

## 🪪 License

Licensed under the MIT License.

---

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=DM+Serif+Text&size=20&duration=4000&pause=1000&color=9DE39D&center=true&vCenter=true&width=600&lines=Crafted+with+GSAP%2C+Styled+with+Tailwind.;Polished+by+Priyanka+Asthana.;Sip+the+Design.+Stir+the+Code.+%F0%9F%8D%B8"/>
</div>
