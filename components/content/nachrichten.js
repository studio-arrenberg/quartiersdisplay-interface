import { createElement } from "react"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"


export default function Nachrichten({ content }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <motion.div
      animate={{ 
        opacity: [0, 1, 1, 0] 
      }}
      transition={{ 
        duration: 20, //gesamte Dauer
        repeat: Infinity,
        times: [0, 0.1, 0.9, 1] 
      }}
    >
      {/* Hintergrundbild */}
      {content?.image && (
        <div className="w-full h-[360px] opacity-30 relative">
          <Image src={content.image} objectFit="cover" layout="fill" />
        </div>
      )}

      <div className=" absolute top-0 left-0 right-0 h-full px-9 flex flex-col justify-center content-center items-center text-center">
        <h2 className="text-[4cm] leading-[5cm] -mb-4 text-white whitespace-nowrap truncate w-full">
          {content?.title && renderHTML(content.title)}
        </h2>
        <p className="text-[1.6cm] bg-white px-4 py-1 mt-6 mb-8  rounded-xl inline-flex self-center">
          Neue Nachricht von {" "}<span className="text-blue-500 ml-2"> {content?.title && renderHTML(content.author)}</span>
        </p>
      </div>
    </motion.div>
  );
}
