import { createElement } from "react";
import Header from "../../ui/header";
import { motion } from "framer-motion"
import { IoChatbubbleOutline } from "react-icons/io5";


export default function Umfragen({ content }) {
  const renderHTML = (rawHTML) =>
    createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <>

    <Header content={content}>
      <IoChatbubbleOutline className="inline-block mr-2 stroke-custom" />
      <span className="font-bold mr-2">Umfrage</span> 
    </Header>


    <motion.div
      id="title"
      initial={{ y: 400 }}
      animate={{ y: 0}}
      exit={{ y: 400 }}
      transition={{
          y: { 
              ease: "easeOut",
              duration: 0.5
          }
      }}
      className="absolute top-0 pt-[20px] h-full flex"
    >
      <div className=" flex items-center px-[40px] ">

        <h2 id="title" className="text-[100px] leading-[110px] tracking-tighter  font-light line-clamp-2">
          {content?.title && renderHTML(content.title)}
        </h2>

        <div id="pol" className=" shrink-0 flex gap-14">
          {content?.poll?.map((poll, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* animated pol bar */}
                <div className="relative w-[100px] h-[190px]  rounded-lg">
                  <motion.div
                    animate={{
                      height: [0 + "%", poll.percentage + "%"],
                    }}
                    transition={{
                      delay: 2,
                      duration: 3,
                      type: "spring",
                      times: [0, 1],
                    }}
                    className="absolute bottom-0  w-[100px] bg-blue-500 rounded-lg"
                  />
                </div>

                <p className="text-[50px] tracking-tighter font-light whitespace-nowrap max-w-[400px] overflow-ellipsis overflow-hidden">
                  {poll.title}
                </p>
                <div className="flex">
                  <p className="text-[20px]  tracking-tighter whitespace-nowrap  overflow-ellipsis overflow-hidden  block  ">
                    {poll.votes} Stimmen • {Math.round(poll.percentage)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
