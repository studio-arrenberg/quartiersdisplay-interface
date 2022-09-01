import { useState, useEffect, createElement, useRef } from "react";
import Image from "next/image";

export default function Posts({ posts }) {
  // const [postIndex, setPostIndex] = useState(0);
  // const [post, setPost] = useState(posts[postIndex])
  const renderHTML = (rawHTML) => createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <div>
      {posts.map((post, index) => (
        <div className="w-[1600px] h-[301px] overflow-hidden bg-black relative" key={index}>

          {post?.imageUrl && 
            <div className="w-full h-full opacity-30 relative">
              <Image src={post.imageUrl} objectFit="cover" layout="fill"/>
            </div>
          }

          <div className=" absolute top-0 h-full  flex">
            <div className="w-[301px] h-[301px] bg-white text-center">
              <h2 className="text-blue-500 pt-[0.6cm] text-[5.5cm] leading-[4cm] font-bold tracking-tighter">23</h2>
              <span className=" text-[2cm] leading-[3cm]  tracking-tight">August</span>
            </div>
            <div className="py-4 pl-8 flex items-center h-[301px] w-[1300px]  ">
              <h2 className="text-[4cm] leading-[4cm] text-white line-clamp-2">{post?.title && renderHTML(post.title)}</h2>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}
