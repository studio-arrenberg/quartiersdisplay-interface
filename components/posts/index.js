import { useState, useEffect, createElement, useRef } from "react";
import Veranstaltungen from "./veranstaltungen";

export default function Posts({ posts }) {
  const POST_DURATION = 10000
  const [postIndex, setPostIndex] = useState(0);

  // iterate posts
  useEffect(() => {
    const timer = setTimeout(() => setPostIndex(postIndex + 1), POST_DURATION);
    return () => clearTimeout(timer);
  }, [postIndex]);

  return <Veranstaltungen post={posts[postIndex]} />;
}
