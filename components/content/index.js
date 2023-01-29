import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import React from "react";
import Switch from "./switch";
import TimingBar from "../ui/timingbar";

export default function Content({ content, meta, mutate }) {
  const slideDuration = meta.slide_duration && meta.slide_duration > 5000 ? meta.slide_duration : 5000;
  // const slideDuration = 200000;
  const slideDurationinSeconds = slideDuration / 1000;
  const delayDuration = 1000;
  const [slide, setSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // add class "dark" to <html> element
  document.documentElement.classList.add("dark");

  if (slide > content.length - 1 || slide < 0) {
    setSlide(0);
    mutate();
  }

  // useEffect runs on every slide change
  useEffect(() => {
    let timeout1;
    let timeout2;
    // start timeout for slideDuration and set isVisible to false
    timeout1 = setTimeout(() => {
      setIsVisible(false);

      // start timeout for delayDuration and set isVisible to true
      timeout2 = setTimeout(() => {
        setIsVisible(true);
        setSlide(prevSlide => prevSlide + 1);
      }, delayDuration);

    }, slideDuration);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [slide, slideDuration]);
  
  return (
    <>
      {content.map((content, index) =>  (
        <AnimatePresence key={index}>
          {isVisible && slide == index && (
            <>
              <TimingBar index={index} slideDurationinSeconds={slideDurationinSeconds}  />
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { 
                    duration: 0.2,
                  }
                }}
                className="text-white text-3xl fixed" >
                <Switch  content={content} slideDurationinSeconds={slideDurationinSeconds} index={index} />
              </motion.div> 
            </>
          )}
        </AnimatePresence>
      ))}

      <div className="z-40 fixed top-[600px] left-10 text-4xl text-black flex items-baseline">
          <div className="mr-10">Slide: {slide}</div>
          <div className="mr-10">ContentLength: {content.length}</div>
          <div className="mr-10">isVisible: {isVisible ? "true" : "false"}</div>
          <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg"  onClick={() => setIsVisible(!isVisible)}>Toggle Modal</button>
          <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg"  onClick={() => document.documentElement.classList.toggle("dark")}>Toggle Dark Mode</button>
          <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg"  onClick={() => setSlide(slide - 1)}>Previous</button>
          <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg"  onClick={() => setSlide(slide + 1)}>Next</button>
      </div>
    </>
  );
}
