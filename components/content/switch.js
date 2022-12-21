import { createElement} from "react";

import Veranstaltungen from "./veranstaltungen";
import Nachrichten from "./nachrichten";
import Umfragen from "./umfragen";
import Projekte from "./projekte";
import Default from "./default";


export default function Switch({ content, contentIndex, state, index }) {

  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } 
  });
  

  return (
    <>
    {/* <div className="">
      {" Index:" + index}
      {state == true ? "true" : "false"}
      {content.type}
    </div> */}

    {state && (
      (() => { 
        switch (content?.type) {
      case "veranstaltungen":
        return <Veranstaltungen content={content} state={state} />;
        break;
      case "nachrichten":
        return <Nachrichten content={content} state={state} />;
        break;
      case "umfragen":
        return <Umfragen content={content} state={state} />;
        break;
      case "projekte":
        return <Projekte content={content} state={state} />;
        break;
      default:
        return <Default content={content} state={state} />;
        break;}
      })()
    )}
  </>

      
  );
}