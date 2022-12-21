import { motion } from "framer-motion";

export default function TimingBar() {

    return (
        <motion.div
              animate={{ 
                width: ["0%", "100%"],
                backgroundColor: ["hsl(205,100,40)", "hsl(205,100,50)"],
              }}
              transition={{ 
                duration: 18, 
                ease: "linear",
              }}
              className="absolute top-[0px] h-[10px] bg-blue-500"
            />
            
    )
}
