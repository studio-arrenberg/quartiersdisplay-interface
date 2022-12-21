import { createElement } from "react";
import Image from "next/image";

export default function Default({ content }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <>
      <div className=" absolute top-0 h-full  flex">
        Default
      </div>
    </>
  );
}
