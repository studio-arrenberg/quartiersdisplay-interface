import { createElement } from "react";
import Image from "next/image";
import * as dayjs from "dayjs";
require("dayjs/locale/de"); // get locale data

export default function Veranstaltungen({ content }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  // convert content.event_date to month in german with dayjs
  const eventMonth = dayjs(content.event_date).format("MMMM");
  // convert content.event_date to day in german with dayjs
  const eventDay = dayjs(content.event_date).format("DD");

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
            {eventDay}
            <br></br>
            {content.event_time}
          </h2>
          <span className=" text-[2cm] leading-[3cm]  tracking-tight">
            {eventMonth}
          </span>
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
