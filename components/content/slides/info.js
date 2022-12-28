import { createElement, useState, useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import * as dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion"
import useCountdown from "@bradgarropy/use-countdown"
import Router from "next/router";
import TimingBar from "../../ui/timingbar";
import Header from "../../ui/header";
import ImageContainer from "../../ui/image";



export default function Info({ content, state }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (

    <>
      {/* Info - Quartiersplattform */}
      {content?.id == "quartiersplattform" ? (
      <>
        <motion.div
            animate={{ 
              y: [-300, 0, 0, -300] 
            }}
            transition={{ 
              delay: 0,
              duration: 20,
              times: [0, 0.1, 0.9, 1],
            }}
            className="absolute w-full top-[45px]  leading-tight text-center">
            
            <h2 className="text-[75px] leading-[180px] tracking-tighter   whitespace-nowrap  overflow-ellipsis overflow-hidden  block  ">
            {content?.title}
            </h2>
            <p>{content?.subtitle}</p>
          </motion.div> 



          <motion.div
            animate={{
              y: [300, 0, 0, 300],
            }} 
            transition={{
              delay: 1,
              duration: 19,
              times: [0, 0.1, 0.9, 1],
            }}
            className="absolute w-full bottom-[60px]  leading-tight text-center flex justify-center" >
            <p className="text-[55px] font-light span bg-blue-500 rounded-xl px-6 pt-1.5 pb-2.5">
            {content?.link}
            </p>
          </motion.div>

          </>
       ) : 
       <>

        <ImageContainer content={content}>

        </ImageContainer>
      
        <motion.div
          animate={{ 
            y: [300, 0, 0, 300] 
          }}
          transition={{ 
            delay: 1,
            duration: 18,
            times: [0, 0.1, 0.9, 1],
          }}
          className="absolute  top-[70px] left-[400px] leading-tight ">
          
          <h2 className="text-[110px] leading-[180px] tracking-tighter  font-light w-[1500px] whitespace-nowrap  overflow-ellipsis overflow-hidden  block  ">
            {content?.title && renderHTML(content.title)}
          </h2>

          <p className="text-[45px] font-light tracking-tight  ">
            {content?.subtitle && renderHTML(content.subtitle)}
          </p>
        </motion.div> 
        </>
       }
      </>

  );
}
