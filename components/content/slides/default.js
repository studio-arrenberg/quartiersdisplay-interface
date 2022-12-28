import { createElement } from "react";

export default function Default({ content }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <>
      <div className=" absolute top-0 h-full  flex">
        Default
        <p className="text-[45px] font-light tracking-tight  ">
            {content?.subtitle && renderHTML(content.subtitle)}
          </p>
      </div>
    </>
  );
}
