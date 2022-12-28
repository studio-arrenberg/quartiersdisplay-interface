import { createElement} from "react";
import Veranstaltungen from "./slides/veranstaltungen";
import Nachrichten from "./slides/nachrichten";
import Umfragen from "./slides/umfragen";
import Projekte from "./slides/projekte";
import Default from "./slides/default";
import Energiewetter from "./slides/energiewetter";
import Info from "./slides/info";

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
      case "energie_wetter":
        return <Energiewetter content={content} state={state} />;
        break;
      case "info":
        return <Info content={content} state={state} />;
        break;
      default:
        return <Default content={content} state={state} />;
        break;}
      })()
    )}
  </>

      
  );
}