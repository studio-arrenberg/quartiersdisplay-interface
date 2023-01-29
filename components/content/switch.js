import { createElement} from "react";
import Veranstaltungen from "./slides/veranstaltungen";
import Nachrichten from "./slides/nachrichten";
import Umfragen from "./slides/umfragen";
import Projekte from "./slides/projekte";
import Default from "./slides/default";
import Energiewetter from "./slides/energiewetter";
import Info from "./slides/info";

export default function Switch({ content, slideDurationinSeconds, index }) {


    { switch (content?.type) {
      case "veranstaltungen":
        return <Veranstaltungen content={content} index={index} slideDurationinSeconds={slideDurationinSeconds} />;
        break;
      case "nachrichten":
        return <Nachrichten content={content} index={index} slideDurationinSeconds={slideDurationinSeconds} />;
        break;
      case "umfragen":
        return <Umfragen content={content} index={index} slideDurationinSeconds={slideDurationinSeconds} />;
        break;
      case "projekte":
        return <Projekte content={content} index={index} slideDurationinSeconds={slideDurationinSeconds} />;
        break;
      case "energie_wetter":
        return <Energiewetter content={content} index={index} slideDurationinSeconds={slideDurationinSeconds} />;
        break;
      case "info":
        return <Info content={content} index={index} slideDurationinSeconds={slideDurationinSeconds} />;
        break;
      default:
        return <Default content={content} index={index} slideDurationinSeconds={slideDurationinSeconds} />;
        break;}
      }
}