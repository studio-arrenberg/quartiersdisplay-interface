import { useState, useEffect, createElement, useRef } from "react";
import Veranstaltungen from "./veranstaltungen";
import Nachrichten from "./nachrichten";
import Umfragen from "./umfragen";
import Projekte from "./projekte";
import Default from "./default";

export default function Content({ content, meta, mutate }) {
  // const SLIDE_DURATION = meta.slide_duration;
  const SLIDE_DURATION = 20000;
  const [contentIndex, setcontentIndex] = useState(0);

  // iterate posts
  useEffect(() => {
    const timer = setTimeout(
      () => setcontentIndex(contentIndex == content.length - 1 ? 0 : contentIndex + 1),
      SLIDE_DURATION
    );

    return () => { 
      clearTimeout(timer);
      console.log("clear timeout");
      mutate() // fetch data after timeout
    }
  }, [contentIndex]);


  // console.log(SLIDE_DURATION);

  // Display content
  switch (content[contentIndex]?.type) {
    case "nachrichten":
      return <Nachrichten content={content[contentIndex]} />;
      break;
    case "veranstaltungen":
      return <Veranstaltungen slideDuration={SLIDE_DURATION} content={content[contentIndex]} />;
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
}
