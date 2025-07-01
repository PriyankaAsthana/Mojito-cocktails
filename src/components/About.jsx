import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#about h2', {
      type: 'words'
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center'
      }
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: 'expo.out',
        stagger: 0.02
      })
      .from('.top-grid div, .bottom-grid div', {
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.04,
      }, '-=0.5');
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">–</span> from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
            </p>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white-100">More than +12000 customers</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* TOP GRID */}
      <div className="top-grid">
        {/* Left Image */}
        <div className="md:col-span-4 overflow-hidden h-72 rounded-3xl relative">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        {/* Center Card */}
        <div className="md:col-span-4 relative flex justify-center items-center !h-auto">
          <div className="feature-card bg-black/90 rounded-3xl text-white w-full md:w-4/5 xl:w-[80%] p-6 space-y-4 border border-white/10 shadow-md">
            <h3 className="text-2xl font-bold font-serif">Crafted to Impress</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-2">
                <span className="text-yellow">●</span> Perfectly balanced blends
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow">●</span> Garnished to perfection
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow">●</span> Ice-cold every time
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow">●</span> Expertly shaken & stirred
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:col-span-4 overflow-hidden h-72 rounded-3xl relative">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="bottom-grid">
        <div className="md:col-span-8 overflow-hidden h-72 rounded-3xl relative">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4 overflow-hidden h-72 rounded-3xl relative">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;