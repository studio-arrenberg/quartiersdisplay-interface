import React, { useState, useEffect } from "react";

export default function Posts({ posts }) {
  // const [postIndex, setPostIndex] = useState(0);
  // const [post, setPost] = useState(posts[postIndex])
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post?.title && renderHTML(post.title)}</h2>
          {post?.imageUrl && <img src={post.imageUrl} />}
        </div>
      ))}
    </div>
  );
}
