
import { useState, useEffect } from "react";
import Veranstaltungen from "./veranstaltungen";
import Nachrichten from "./nachrichten";
import Umfragen from "./umfragen";
import Projekte from "./projekte";
import Default from "./default";

import React from "react";


export default function Content({ content, meta, mutate }) {
  // const SLIDE_DURATION = meta.slide_duration;
  const SLIDE_DURATION = 1000;
  const [contentIndex, setcontentIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [delay, setDelay] = useState(false);

  if (contentIndex > content.length - 1) {
    setcontentIndex(0);
    mutate();
  }

  useEffect(() => {
    let i = 0;

    function Update() {
      setDelay(true);
      setcontentIndex((i) => i + 1);

      setTimeout(() => {
        setDelay(false);
      }, 1000);
    }
    
    const interval = setInterval(
      Update, 
      20000
    );

    return () => clearInterval(interval);
}, [])


useEffect(() => {
  let s = 0;

  function Count() {
    // if delay is true, stop counting
    if (delay) {
      return;
    }
    setTimer((s) => s + 0.1);
  }
  
  const countInterval = setInterval(
    Count,
    100
  );

  return () => clearInterval(countInterval);
}, [])


  return (
    <>
      {
        !delay && (
          (() => {
            switch (content[contentIndex]?.type) {
              case "nachrichten":
                return <Nachrichten content={content[contentIndex]} />;
                break;
              case "veranstaltungen":
                return <Veranstaltungen content={content[contentIndex]} />;
                break;
              case "umfragen":
                return <Umfragen content={content[contentIndex]} />;
                break;
              case "projekte":
                return <Projekte content={content[contentIndex]} />;
                break;
              default:
                return <Default content={content[contentIndex]} />;
                break;
            }
          })()
        ) 
      } 

      <h2 className=" fixed top-[600px] left-20 text-4xl text-black">
        Delay: {delay ? "true" : "false"} <br />
        Index: {contentIndex} <br />
        Countdown: {Math.round(timer)} <br />

        {/* button onclick add 1 to contentindex */}
        <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg mr-2" onClick={() => setcontentIndex((i) => i + 1)}>Next</button>

        <button className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 mt-4 rounded-lg"  onClick={() => document.documentElement.classList.toggle("dark")}>Toggle Dark Mode</button>
      </h2>
    </>
  );
}