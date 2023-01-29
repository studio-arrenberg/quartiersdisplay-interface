import { motion } from "framer-motion";

export default function TimingBar({slideDurationinSeconds, index}) {

    return (
          <motion.div
            id={index}
            key={index}
            initial={{  translateX: "-100%"}}
            animate={{ 
              translateX: ["-100%", "0%"],
              }}
            transition={{ 
              duration: slideDurationinSeconds, 
              ease: "linear",
            }}
            exit={{ opacity: 0}}
            className="absolute top-[0px] h-[10px] w-full z-20 bg-gradient-to-r from-blue-900 to-blue-500"
          />
    )
}
