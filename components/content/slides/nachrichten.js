import React from "react";
import Header from "../../ui/header";
import ImageContainer from "../../ui/image";
import { IoMegaphoneOutline } from "react-icons/io5";
import Title from "../../ui/title";

require("dayjs/locale/de"); // get locale data

export default function Nachrichten({  slideDurationinSeconds, content, index }) {

  return (
      <>
        <Header content={content}>
         <IoMegaphoneOutline className="inline-block mr-2 stroke-custom" />
         <span className="font-bold mr-2">Nachricht</span> 
        </Header>

        <Title content={content} slideDurationinSeconds={slideDurationinSeconds} />

        <ImageContainer content={content} index={index} />
      </>
  );
}
