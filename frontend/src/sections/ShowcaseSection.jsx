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
    <div id='work' className="w-full padding-x-lg pt-20">
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
                  className="w-full h-52 object-fill rounded"
                  loading="lazy"
                />
                <div className="card-content">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-80 mb-4">{item.desc}</p>
                  </div>
                  <div className="flex gap-4 flex-wrap mt-auto">
                    <a href={item.link} target="_blank"
                      rel="noopener noreferrer" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                      <span className="relative px-3 py-1.5 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                        <span className="relative text-white">View project</span>
                      </span>
                    </a>
                    <a href={item.github} target="_blank"
                      rel="noopener noreferrer" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                      <span className="relative px-3 py-1.5 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                        <span className="relative text-white">Github</span>
                      </span>
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
