import { createElement, useState, useEffect, useRef } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import Header from "../../ui/header";
import ImageContainer from "../../ui/image";

export default function Projekte({ content, state }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <>
      <Header contentType="Mach mit beim Projekt" content={content} state={state} />
      <ImageContainer content={content}>

      </ImageContainer>
    
      {/*  Event title */}
      <motion.div
        animate={{ 
          y: [300, 0, 0, 300] 
        }}
        transition={{ 
          delay: 1,
          duration: 19,
          times: [0, 0.1, 0.9, 1],
        }}
        className="absolute  top-[70px] left-[400px] leading-tight ">
        
        <h2 className="text-[150px] leading-[180px] tracking-tighter  font-light w-[1500px] whitespace-nowrap  overflow-ellipsis overflow-hidden  block  ">
          {content?.title && renderHTML(content.title)}
        </h2>

        <p className="text-[35px] font-light tracking-tight line-clamp-2  w-[1400px] ">
          {content?.subtitle && renderHTML(content.subtitle)}
          {!content?.subtitle && content?.text && renderHTML(content.text)}
        </p>
      </motion.div> 
    </>
  );
}
