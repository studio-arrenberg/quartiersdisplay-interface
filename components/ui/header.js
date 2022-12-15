import { createElement } from "react";
import { motion } from "framer-motion";
import { IoMegaphoneOutline, IoCalendarOutline, IoChatbubbleOutline, IoHeartOutline  } from "react-icons/io5";


const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });



export default function Header({contentType, content}) {

    return (
          
        <motion.div
            animate={{
                y: [-100, 0, 0, -100],
            }}
            transition={{
                times: [0, 0.05, 0.95, 1],
                duration: 19,
                ease: "easeInOut",
            }}
        >
            <div className="absolute top-[25px] left-[400px] w-[1500px]  text-[35px]   font-light flex items-center">
                    {content.type === "nachrichten" && (
                        <>
                            <IoMegaphoneOutline className="inline-block mr-2 stroke-custom" />
                            <span className="font-bold mr-2">Nachricht</span> 
                        </>
                    )}
                    {content.type === "projekte" && (
                        <>
                            <IoHeartOutline className="inline-block mr-2 stroke-custom" />
                            <span className="font-bold mr-2">Mach mit beim Projekt</span> 
                        </>
                    )}
                    {content.type === "veranstaltungen" && (
                        <>
                            <IoCalendarOutline className="inline-block mr-2 stroke-custom" />
                            <span className="font-bold mr-2">Veranstaltung</span> 
                        </>
                    )}
                     {content.type === "umfragen" && (
                        <>
                            <IoChatbubbleOutline className="inline-block mr-2 stroke-custom" />
                            <span className="font-bold mr-2">Veranstaltung</span> 
                        </>
                    )}
                
                    <span>von {content?.title && renderHTML(content.author)}</span>
                    <div className="font-bold ml-auto">{content?.project && renderHTML(content.project)}  {content.emoji}</div>



                
            </div>
        </motion.div>
            
    )
}
