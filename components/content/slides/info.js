import { createElement, useState, useEffect, useRef } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion"
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
          initial={{ y: 100 }}
          animate={{ y: 0}}
          exit={{ y: 100 }}
          transition={{
            y: { 
                ease: "easeOut",
                duration: 0.5
            }
          }}
          className="absolute w-[1920px] top-[45px]  leading-tight text-center"
        >
          <p className="text-[35px]">{content?.subtitle}</p>
          <h2 className="text-[75px]  tracking-tighter   whitespace-nowrap  overflow-ellipsis overflow-hidden  block  ">
            {content?.title}
          </h2>
        </motion.div> 


          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0}}
            exit={{ y: 100 }}
            transition={{
              y: { 
                  ease: "easeOut",
                  duration: 0.5
              }
            }}
            className="absolute  w-[1920px]    top-[200px]  leading-tight text-center flex justify-center" >
            <p className="text-[55px] font-light span bg-blue-500 rounded-xl px-6 pt-1.5 pb-2.5">
            www.{content?.link}
            </p>
          </motion.div>

          </>
       ) : 
       <>

        <ImageContainer content={content} />

      
        <motion.div
          animate={{ 
            y: [300, 0, 0, 300] 
          }}
          transition={{ 
            delay: 1,
            duration: 18,
            times: [0, 0.1, 0.9, 1],
          }}
          className="absolute  top-[60px] left-[400px] leading-tight ">
          
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
