import { motion } from "framer-motion";
import Image from "next/image";
import { IoMegaphoneOutline, IoCalendarOutline, IoChatbubbleOutline, IoHeartOutline  } from "react-icons/io5";


export default function ImageContainer({ content, children}) {

    return (

      <motion.div
        animate={{ 
          x: [-360, 0, 0, -360]
        }}
        transition={{ 
          delay: 1,
          duration: 19, 
          times: [0, 0.05, 0.95, 1],
        }}
        className="absolute left-0 top-[10px] w-[350px] h-[350px] text-center text-white overflow-hidden"
      >

        {/* Hintergrundbild */}
        <div className="absolute top-0 left-0 w-full h-full bg-black">
        {content?.image  ? (
            <motion.div
              animate={{ 
                scale: [1, 1.5]
              }}
              transition={{ 
                duration: 19,
                ease: "linear"
              }}
              className="absolute left-0 top-[5px] w-[355px] h-[355px] text-center text-white "
            >
              <Image src={content.image} objectFit="cover" layout="fill" className=" " alt=" " />
            </motion.div>
          ) : 
            content.type !== "veranstaltungen"  && (
              <div className="absolute top-0 left-0 w-full h-full bg-blue-900/50 z-10 text-white fill-white flex justify-center items-center text-[150px]">
                {content.type === "nachrichten" && (<IoMegaphoneOutline className="inline-block stroke-custom" />)}
                {content.type === "projekte" && (<IoHeartOutline className="inline-block stroke-custom " />)}
                {content.type === "umfragen" && (<IoChatbubbleOutline className="inline-block stroke-custom" />)}
              </div>
            )
        }
        </div>

        {!content?.image && ( 
          <div className="absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center" />
        )}

        {children}
        
      </motion.div>
    )
}
