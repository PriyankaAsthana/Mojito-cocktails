const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black text-white min-h-screen pt-32 pb-24 px-5 md:px-24 overflow-hidden flex items-center"
    >
        <img src="/images/hero-left-leaf.png" alt="leaf" className="absolute top-0 left-0 w-62 opacity-100 md:opacity-100" />
      <img src="/images/hero-right-leaf.png" alt="leaf" className="absolute bottom-0 right-0 w-42 opacity-100 md:opacity-100" />
      <div className="w-full max-w-4xl mx-auto text-center space-y-16">
        {/* HEADING */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-modernNegra">
            Where to Find Us
          </h2>
          <p className="text-white-100 text-base md:text-lg max-w-xl mx-auto">
            Whether you're visiting us or just saying hi, we’re here to help. Drop by the bar or reach out anytime.
          </p>
        </div>

        {/* CONTACT INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left text-white-100 text-sm md:text-base">
          {/* Address */}
          <div className="space-y-2">
            <h4 className="text-white text-lg font-bold mb-1">Visit Our Bar</h4>
            <p>456, Raq Blvd. #404</p>
            <p>Los Angeles, CA 90210</p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="text-white text-lg font-bold mb-1">Contact Us</h4>
            <p>(555) 987-6543</p>
            <p>hello@jsmcocktail.com</p>
          </div>

          {/* Hours */}
          <div className="space-y-2">
            <h4 className="text-white text-lg font-bold mb-1">Open Every Day</h4>
            <p>Mon–Thu : 11:00am – 12am</p>
            <p>Fri : 11:00am – 2am</p>
            <p>Sat : 9:00am – 2am</p>
            <p>Sun : 9:00am – 1am</p>
          </div>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-center items-center gap-6 pt-8">
          <a href="#" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="X / Twitter">
            <img src="/icons/twitter-x.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
