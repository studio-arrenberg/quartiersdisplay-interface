import { createElement} from "react";
import React from "react";
import * as dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion"
import TimingBar from "../../ui/timingbar";
import Header from "../../ui/header";
import ImageContainer from "../../ui/image";
import {  IoLeafOutline  } from "react-icons/io5";



require("dayjs/locale/de"); // get locale data




export default function Energiewetter({  slideDuration, content }) {

  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } 
  });



const fadeVariants = {
  hidden: {
    opacity: 1,
    transform: 'scale(0)',
  },
  visible: {
    opacity: 0,
    transform: 'scale(1)',
  },
 
};

// content sutitle defines the color of the circle
// if content subtitle = "red" then current color is #ff0000


 




  return (
        <>
          <motion.div
            animate={{
                y: [-100, 0, 0, -100],
            }}
            transition={{
                times: [0, 0.05, 0.95, 1],
                duration: 19,
                ease: "easeInOut",
            }}
          >
            <div className="absolute top-[15px] left-[400px] w-[1500px]  text-[35px]   font-light flex items-center  max-h-[50px] ">

              <IoLeafOutline className="inline-block mr-2 stroke-custom" />
              <span className="font-bold mr-2">
                {content?.title ? renderHTML(content.title) : "Energiewetter für Wuppertal" }
               </span> 
            </div>
        </motion.div>


        {/* Ampel */}
        <div>
            <motion.div
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                duration: 6,
                loop: Infinity,
                ease: 'easeOut',
              }}
              className="w-80 h-80 rounded-full absolute left-[30px] top-[25px] "
              style={{
                background: content.subtitle
              }}
            />
             <motion.div
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                duration: 6,
                delay: 2,
                loop: Infinity,
                ease: 'easeOut',
              }}
              className="w-80 h-80 rounded-full absolute left-[30px] top-[25px] "
              style={{
                background: content.subtitle
              }}
            />
             <motion.div
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                duration: 6,
                delay: 4,
                loop: Infinity,
                ease: 'easeOut',
              }}
              className="w-80 h-80 rounded-full absolute left-[30px] top-[25px]  "
              style={{
                background: content.subtitle
              }}
            />
        </div>

        <motion.div
          animate={{ 
            y: [300, 0, 0, 300] 
          }}
          transition={{ 
            delay: 1,
            duration: 18,
            times: [0, 0.1, 0.9, 1],
          }}
          className="absolute  left-[400px] top-[70px]  leading-tight ">
          
          <h2 className="text-[110px] leading-[180px] tracking-tighter  font-light w-[1500px] whitespace-nowrap  overflow-ellipsis overflow-hidden  block  ">
          {content?.content.label.plural} Phase
          </h2>

          <p className="text-[35px] font-light tracking-tight line-clamp-2  w-[1400px] ">
            <p>Emissionen: {content?.content.emissions.amount}  <span className="font-light">{content?.content.emissions.unit}</span></p>
          </p>
        </motion.div> 
      </>
  );
}
