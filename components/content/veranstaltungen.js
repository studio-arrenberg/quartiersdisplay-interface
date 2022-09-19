import { createElement, useState, useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import * as dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion"

require("dayjs/locale/de"); // get locale data

export default function Veranstaltungen({  slideDuration, content }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });


  const [isVisible, setIsVisible] = useState(true);

  // convert content.event_date to month in german with dayjs
  const eventMonth = dayjs(content.event_date).format("MMMM");
  // convert content.event_date to day in german with dayjs
  const eventDay = dayjs(content.event_date).format("DD");

  const introDurration =  slideDuration / 2;


  // useEffect(() => {
  //   const timer = setTimeout(() => setIsVisible(!isVisible), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // console.log(isVisible);


  return (
  
      <motion.div
        animate={{ 
          opacity: [0, 1, 1, 0] 
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          times: [0, 0.1, 0.9, 1]
        }}
      >


          
            {content?.image && (
              <div className="w-[1920px] h-[360px] opacity-30 relative">
                <Image src={content.image} objectFit="cover" layout="fill" />
              </div>
            )}

            <motion.div
              animate={{ 
                x: [-360, 0, 0, -360] 
              }}
              transition={{ 
                delay: 1,
                duration: 10,
                repeatDelay: 2,
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
              }}
              className="absolute left-0 top-0 w-[360px] h-[360px] bg-white text-center text-blue-500"
            >
              <h2 className=" pt-[1.4cm] mb-2 text-[6.6cm] leading-[4.5cm] font-bold tracking-tight">
                {eventDay}
              </h2>
              <span className=" text-[2.5cm] leading-[3cm]  tracking-tight">
                {eventMonth}
              </span>
            </motion.div>

          <motion.div
            animate={{ 
              y: [360, 0, 0, -360] 
            }}
            transition={{ 
              delay: 2,
              duration: 3,
              repeatDelay: 9,
              times: [0, 0.1, 0.9, 1],
              repeat: Infinity,
            }}

            className="absolute top-0 left-[370px] flex flex-col justify-center h-[360px] w-[1800px]  ">
              <h2 className="text-[4.1cm] leading-[4.5cm] text-white line-clamp-1 max-h-full tracking-tighter ">
                Veranstaltung um <span className="">{content.event_time}</span>
              </h2>
              <p className="text-[1cm]">
                {content?.title && renderHTML(content.author)}
              </p>
            </motion.div>




 
            <motion.div
            animate={{ 
              y: [360, 0, 0, -360] 
            }}
            transition={{ 
              delay: 6,
              duration: 5,
              repeatDelay: 7,
              times: [0, 0.1, 0.9, 1],
              repeat: Infinity,
            }}
            className="absolute  top-0 left-[370px] flex items-center h-[360px] w-[1560px]  ">
              <h2 className="text-[5.1cm] leading-[4.5cm] text-white line-clamp-2 max-h-full">
                {content?.title && renderHTML(content.title)}
              </h2>
            </motion.div> 


      </motion.div>
  );
}
