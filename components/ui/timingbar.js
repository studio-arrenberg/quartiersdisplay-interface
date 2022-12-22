import { motion } from "framer-motion";

export default function TimingBar({state}) {

    return (
        <>
          <div className="absolute top-[0px] h-[10px] w-full  bg-blue-100" />
          <motion.div
              animate={{ 
                width: ["0%", "100%"],
                backgroundColor: ["hsl(205,100,40)", "hsl(205,100,50)"],
              }}
              transition={{ 
                duration: 20, 
                ease: "linear",
              }}
              className="absolute top-[0px] h-[10px] bg-blue-500"
            />
        </> 
    )
}
