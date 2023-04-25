import { createElement } from "react";
import { motion } from "framer-motion";
import { IoMegaphoneOutline, IoCalendarOutline, IoChatbubbleOutline, IoHeartOutline  } from "react-icons/io5";
import React from "react";
// import Emoji from "react-apple-emojis";
import Umfragen from "../content/slides/umfragen";

const renderHTML = (rawHTML) => createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

export default function Header({contentType, content}) {
    // const emoji = require("emoji-dictionary");
    // let emojiName = emoji.getName(content.emoji);
    
    // if (emojiName) {  

    //     // replace all underscores with dashes until there are no underscores left
    //     while (emojiName.includes("_")) {
    //         emojiName = emojiName.replace("_", "-");
    //     }

    //     // replace false names with correct ones
    //     if (emojiName=="iphone") {
    //         emojiName = "mobile-phone";
    //     }

    //     if (emojiName=="heart") {
    //         emojiName = "red-heart";
    //     }
        
    //     if (emojiName=="+1") {
    //         emojiName = "thumbs-up";
    //     }

    //     if (emojiName=="loud-sound") {
    //         emojiName = "speaker-high-volume";
    //     }

    //     if (emojiName=="eyeglasses") {
    //         emojiName = "glasses";
    //     }

    //     if (emojiName=="busstop") {
    //         emojiName = "bus-stop";
    //     }
    //     if (emojiName=="bulb") {
    //         emojiName = "light-bulb";
    //     }
    //     if (emojiName=="speak-no-evil") {
    //         emojiName = "speak-no-evil-monkey";
    //     }
    // }



    
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
            
            <div className={`absolute top-[20px]  w-[1500px]  text-[35px] font-light flex items-center  max-h-[50px]`}
            style={{left: content.type === "umfragen" ? "40px" : "400px"}}>

                {content.type === "nachrichten" && (
                    <>
                        <IoMegaphoneOutline className="inline-block mr-2 stroke-custom" />
                        <span className="font-bold mr-2">Nachricht</span> 
                    </>
                )}
                {content.type === "projekte" && (
                    <>
                        <IoHeartOutline className="inline-block mr-2 stroke-custom " />
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
                        <span className="font-bold mr-2">Umfrage</span> 
                    </>
                )}


                {/* if content  type is not umfragen and not projekte show */}
                {content.type !== "umfragen" && content.type !== "projekte" && (
                    <>
                        <span>von {content?.title && renderHTML(content.author)}</span>
                        <div className="font-bold ml-auto max-w-[660px] overflow-hidden text-ellipsis">
                            {content?.project && renderHTML(content.project)}
                        </div>
                        {/* {emojiName && <Emoji className="ml-3" name={emojiName} width={38} />} */}
                    </>
                )}
            </div>
        </motion.div>
            
    )
}
