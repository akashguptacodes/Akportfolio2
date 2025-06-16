import './showcaseSection.css';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeIn, items } from "../constants/utils";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  useEffect(() => {
    let angle = 0;
    const interval = setInterval(() => {
      angle = (angle + 1) % 360;
      document.documentElement.style.setProperty('--angle', `${angle}deg`);
    }, 10);
    return () => clearInterval(interval);
  }, []);


  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <div className="w-full padding-x-lg" id='work'>
      <h1 className="text-center text-5xl font-bold mb-6 w-full">Projects:-</h1>
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: false, amount: 0.2 }}
        className="lineAnime"
      >
        {items.map((item) => (
          <Tilt
            options={defaultOptions}
            className='z-20'
          >
            <div key={item.id} className="glow-wrapper">
              <div className="card-border">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover rounded"
                  loading="lazy"
                />
                <div className="card-content">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-80 mb-4">{item.desc}</p>
                  </div>
                  <div className="flex gap-4 flex-wrap mt-auto">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm rounded bg-white text-black font-medium hover:bg-gray-200 transition"
                    >
                      View Project
                    </a>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm rounded bg-white text-black font-medium hover:bg-gray-200 transition"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </motion.div>
    </div>
  );
};

export default AppShowcase;
