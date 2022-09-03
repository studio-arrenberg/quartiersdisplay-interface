import { createElement } from "react";
import Image from "next/image";

export default function Projekte({ content }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <div className="w-[1600px] h-[301px] overflow-hidden bg-black relative">
      {content?.image && (
        <div className="w-full h-full opacity-30 relative">
          {/* <Image src={content.image} objectFit="cover" layout="fill" /> */}
          <img src={content.image} />
        </div>
      )}

      <div className=" absolute top-0 h-full  flex">
        <div className="w-[301px] h-[301px] bg-white text-center">
          <h2 className="text-blue-500 pt-[0.6cm] text-[5.5cm] leading-[4cm] font-bold tracking-tighter">
            {content.type}
          </h2>
        </div>
        <div className="py-4 pl-8 flex items-center h-[301px] w-[1300px]  ">
          <h2 className="text-[4cm] leading-[4cm] text-white line-clamp-2">
            {content?.title && renderHTML(content.title)}
          </h2>
        </div>
      </div>
    </div>
  );
}
