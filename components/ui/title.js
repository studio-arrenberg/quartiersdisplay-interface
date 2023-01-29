import { motion } from "framer-motion";
import { createElement, useState, useEffect, useRef } from "react";

export default function Title({ content, children, slideDurationinSeconds}) {

  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } 
});

    return (
        <motion.div
            id="title"
            initial={{ y: 100 }}
            animate={{ y: 0}}
            exit={{ y: 100 }}
            transition={{
                y: { 
                    ease: "easeOut",
                    duration: 0.5
                }
            }}
            className={` absolute  w-[1400px] top-[55px] left-[400px] leading-tight }`}
        >

            <motion.h2 
                animate={{ right: 0 }}
                transition={{
                    delay: 1,
                    ease: "easeInOut",
                    duration: slideDurationinSeconds - 2,
                }}
                className="text-[150px]  tracking-tighter  font-light w-auto  whitespace-nowrap min-w-[1400px] absolute "
            >
                {content?.title && renderHTML(content.title)}
            </motion.h2>

            <p className="text-[40px] font-light tracking-tight  w-[1400px] absolute top-[180px]">
                {content?.subtitle && conten.subtitle > 100 ? renderHTML(content.subtitle.substring(0, 150) + "...") : renderHTML(content.subtitle)}
                {!content?.subtitle && content?.text && content?.text.length > 100 ? renderHTML(content.text.substring(0, 150) + "...") : renderHTML(content.text)}
            </p>
        </motion.div> 
    );
}  