import { createElement } from "react";

export default function Umfragen({ content }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <>
      <div className=" absolute top-0 h-full  flex">
        {content?.poll?.map((poll, i) => (
          <p key={i}>
            {poll.title} • {poll.votes} votes • {poll.percentage}%{" "}
          </p>
        ))}
        <div className="py-4 pl-8 flex items-center h-[301px] w-[1300px]  ">
          <h2 className="text-[150px] leading-[180px] tracking-tighter  font-light w-[1500px] whitespace-nowrap  overflow-ellipsis overflow-hidden  block  ">
            {content?.title && renderHTML(content.title)}
          </h2>
        </div>
      </div>
    </>
  );
}
