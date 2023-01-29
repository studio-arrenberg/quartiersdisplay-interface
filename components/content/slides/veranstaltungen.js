import { createElement, useState, useEffect, useRef } from "react";
import React from "react";
import * as dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion"
import Header from "../../ui/header";
import ImageContainer from "../../ui/image";
import { IoCalendarOutline } from "react-icons/io5";
import Title from "../../ui/title";

require("dayjs/locale/de"); // get locale data

export default function Veranstaltungen({ slideDuration, content, slideDurationinSeconds}) {
  dayjs.locale("de");
  const eventDate = dayjs(content.event_date).format("DD.MM");
  const eventWeekday = dayjs(content.event_date).format("dddd");

  return (
      <>
        <Header content={content}>
          <IoCalendarOutline className="inline-block mr-2 stroke-custom" />
          <span className="font-bold mr-2">Veranstaltung</span> 
        </Header>
       
        <Title content={content} slideDurationinSeconds={slideDurationinSeconds} />

        <ImageContainer content={content}>
          {/*  Day Container */}
          <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/50">
            <h2 className=" pt-[30px]  text-[35px]  font-bold tracking-tight">
              {eventWeekday}
            </h2>
            <h2 className=" pt-[15px]  text-[140px] leading-[130px] font-bold tracking-tighter whitespace-nowrap overflow-ellipsis overflow-hidden">
              {eventDate}
            </h2>
            <span className=" text-[35px] leading-[3cm]  tracking-tight">
              {content.event_time} Uhr
            </span>
          </div>
        </ImageContainer>
      </>
  );
}
