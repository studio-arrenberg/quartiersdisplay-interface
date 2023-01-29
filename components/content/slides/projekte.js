import { createElement } from "react";
import { IoHeartOutline } from "react-icons/io5";
import React from "react";
import Header from "../../ui/header";
import Title from "../../ui/title";
import ImageContainer from "../../ui/image";

export default function Projekte({ content, state }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <>
      <Header contentType="Mach mit beim Projekt" content={content}>
         <IoHeartOutline className="inline-block mr-2 stroke-custom" />
         <span className="font-bold mr-2">Mach mit beim Projekt</span> 
      </Header>

      <Title content={content} slideDurationinSeconds={slideDurationinSeconds} />

      <ImageContainer content={content} />
    </>
  );
}
