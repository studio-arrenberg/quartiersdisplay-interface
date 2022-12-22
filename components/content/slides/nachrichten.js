import { createElement} from "react";
import React from "react";
import * as dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion"
import TimingBar from "../../ui/timingbar";
import Header from "../../ui/header";
import ImageContainer from "../../ui/image";


require("dayjs/locale/de"); // get locale data

export default function Nachrichten({  slideDuration, content }) {

  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } 
  });


  return (
      <>
        <Header contentType="Nachricht" content={content} />

        {/* <TimingBar  /> */}
       
        <ImageContainer content={content}>

        </ImageContainer>
      
        {/*  Event title */}
        <motion.div
          animate={{ 
            y: [300, 0, 0, 300] 
          }}
          transition={{ 
            delay: 1,
            duration: 18,
            times: [0, 0.1, 0.9, 1],
          }}
          className="absolute  top-[75px] left-[400px] leading-tight ">
          
          <h2 className="text-[150px] leading-[180px] tracking-tighter  font-light w-[1500px] whitespace-nowrap  overflow-ellipsis overflow-hidden  block  ">
            {content?.title && renderHTML(content.title)}
          </h2>

          <p className="text-[35px] font-light tracking-tight line-clamp-2  w-[1400px] ">
            {content?.text && renderHTML(content.text)}
          </p>
        </motion.div> 
      </>
  );
}
