import { motion } from "framer-motion";

export default function TimingBar({slideDuration}) {
    console.log("slideDuration",slideDuration, (slideDuration / 1000))
    return (
      <>
        <div className="absolute top-[0px] h-[10px] w-full  bg-blue-500/30 z-10" />
          <motion.div
            animate={{ 
              translateX: ["-100%", "100%"],
              backgroundColor: ["hsl(205,100,40)", "hsl(205,100,50)"],
            }}
            transition={{ 
              duration: (slideDuration / 1000) * 2, 
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute top-[0px] h-[10px] bg-blue-500 w-full z-20"
          />
      </> 
    )
}
