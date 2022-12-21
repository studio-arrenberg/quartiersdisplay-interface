
import { useRef, useState, useEffect } from "react";

import React from "react";
import Switch from "./switch";


export default function Content({ content, meta, mutate }) {
  const slideDuration = 20000;
  const [contentIndex, setContentIndex] = useState(0);
  const timer = useRef(null); // we can save timer in useRef and pass it to child

  useEffect(() => {
    timer.current = setInterval(
      () => {
        setContentIndex((v) => v + 1)
        mutate()
      },
      slideDuration);

      // clear on component unmount
      return () => {
        clearInterval(timer.current);
      };
    }, []);

  return (
    <div>
      {content.map((content, index) =>  (
        <div key={index}>
          <Switch  content={content} contentIndex={contentIndex} index={index} state={index == contentIndex ? true : false } />
        </div>
      ))}

      <h2 className=" fixed top-[600px] left-20 text-4xl text-black">
         <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg mr-2" onClick={() => setContentIndex((i) => i + 1)}>Next</button>
          <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg"  onClick={() => document.documentElement.classList.toggle("dark")}>Toggle Dark Mode</button>
       </h2>
    </div>
  );
}
