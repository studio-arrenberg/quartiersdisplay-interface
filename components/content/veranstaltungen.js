import { createElement, useState, useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import * as dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion"
import useCountdown from "@bradgarropy/use-countdown"
import Router from "next/router";
import TimingBar from "../ui/timingbar";
import Header from "../ui/header";
import ImageContainer from "../ui/image";


require("dayjs/locale/de"); // get locale data

export default function Veranstaltungen({  slideDuration, content }) {

  dayjs.locale("de");

  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } 
  });

  const eventDate = dayjs(content.event_date).format("DD.MM");
  const eventTime = content.event_time
  const eventWeekday = dayjs(content.event_date).format("dddd");




  return (
      <>
    
        <Header contentType="Veranstaltung" content={content} />

        <TimingBar  />
       
        <ImageContainer content={content}>
          
          {/*  Day Container */}
          <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/50">
            <h2 className=" pt-[30px]  text-[35px]  font-bold tracking-tight">
              {eventWeekday}
            </h2>
            <h2 className=" pt-[15px]  text-[150px] leading-[130px] font-bold tracking-tight whitespace-nowrap overflow-ellipsis overflow-hidden">
              {eventDate}
            </h2>
            <span className=" text-[35px] leading-[3cm]  tracking-tight">
              {eventTime}
            </span>
          </div>

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
          
          <h2 className="text-[150px] leading-[180px] tracking-tighter   w-[1500px] whitespace-nowrap  overflow-ellipsis overflow-hidden  block  ">
            {content?.title && renderHTML(content.title)}
          </h2>

          <p className="text-[35px] font-light tracking-tight line-clamp-2  w-[1400px] ">
            {content?.text && renderHTML(content.text)}
          </p>
        </motion.div> 
      </>
  );
}
