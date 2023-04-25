
import { useRef, useState, useEffect } from "react";
import React from "react";
import Switch from "./switch";
import TimingBar from "../ui/timingbar";

export default function Content({ content, meta, mutate }) {
  const slideDuration = meta.slide_duration ? meta.slide_duration : 20000;
  const [contentIndex, setContentIndex] = useState(0);

  // add class "dark" to <html> element
  if (typeof document !== "undefined") document.documentElement.classList.add("dark");

  if (contentIndex > content.length - 1 || contentIndex < 0) {
    setContentIndex(0);
    mutate();
  } 

  useEffect(() => {
    let id = setInterval(
      () => {
        setContentIndex(contentIndex => contentIndex + 1);
      },
      slideDuration);

    // clear on component unmount
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <TimingBar slideDuration={slideDuration}  />
      {content.map((content, index) =>  (
        <div key={index}>
          <Switch  content={content} contentIndex={contentIndex} index={index} state={index == contentIndex ? true : false } />
        </div>
      ))}

      <div className="z-40 fixed top-[600px] left-10 text-4xl text-black flex items-baseline">
          <div className="mr-10">ContentIndex: {contentIndex}</div>
          <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg"  onClick={() => document.documentElement.classList.toggle("dark")}>Toggle Dark Mode</button>
          <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg"  onClick={() => setContentIndex(contentIndex - 1)}>Previous</button>
          <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg"  onClick={() => setContentIndex(contentIndex + 1)}>Next</button>
      </div>
    </div>
  );
}
