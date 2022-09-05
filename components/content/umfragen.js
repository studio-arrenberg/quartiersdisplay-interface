import { createElement } from "react";
import Image from "next/image";

export default function Umfragen({ content }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <div className="w-[1600px] h-[301px] overflow-hidde relative">
      <div className=" absolute top-0 h-full  flex">
        {content?.poll?.map((poll) => (
          <p>
            {poll.title} • {poll.votes} votes • {poll.percentage}%{" "}
          </p>
        ))}
        <div className="py-4 pl-8 flex items-center h-[301px] w-[1300px]  ">
          <h2 className="text-[4cm] leading-[4cm] text-white line-clamp-2">
            {content?.title && renderHTML(content.title)}
          </h2>
        </div>
      </div>
    </div>
  );
}
