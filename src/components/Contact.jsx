import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-grid > div", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".social-icons a", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-black text-white min-h-screen pt-32 pb-24 px-5 sm:px-10 md:px-16 lg:px-24 overflow-hidden flex items-center"
    >
      {/* Decorative Leaves */}
      <img
        src="/images/beer.jpg"
        alt="leaf"
        className="absolute top-0 left-0 w-98 sm:w-88 md:w-78 lg:w-110 opacity-80"
      />
      <img
        src="/images/beer2.jpg"
        alt="leaf"
        className="absolute bottom-0 right-0 w-48 sm:w-48 md:w-48 lg:w-68 opacity-80"
      />

      <div className="w-full max-w-6xl mx-auto text-center space-y-16 px-2">
        {/* Heading */}
        <div className="space-y-4 contact-heading">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-modernNegra">
            Where to Find Us
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto">
            Whether you're visiting us or just saying hi, we’re here to help. Drop by the bar or reach out anytime.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left contact-grid">
          <div className="space-y-2">
            <h4 className="text-white text-lg font-bold mb-1">Visit Our Bar</h4>
            <p>Gomti Nagar, Ion Road</p>
            <p>Lucknow, UP, India</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-white text-lg font-bold mb-1">Contact Us</h4>
            <p>123456789</p>
            <p>@VelvetPourmcocktail.com</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-white text-lg font-bold mb-1">Open Every Day</h4>
            <p>Mon–Thu : 11:00am – 12am</p>
            <p>Fri : 11:00am – 2am</p>
            <p>Sat : 9:00am – 2am</p>
            <p>Sun : 9:00am – 1am</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-center items-center gap-6 pt-6 social-icons">
          <a href="#" aria-label="Instagram">
            <img src="/images/insta.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="/images/x.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src="/images/fb.png" alt="Facebook" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
