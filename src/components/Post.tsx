import type { Post as PostType } from "./types";
import "../styles/Post.css";
import React from "react";

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const isJosiane = post.author === "Josiane";

  return (
    <div className={`post ${isJosiane ? "highlighted" : ""}`}>
      <h2 style={{ marginBottom: "4px" }}>{post.title}</h2>
      <p className="author">By {post.author}</p>
      <p className="preview">{post.content.slice(0, 50)}...</p>
      <p className="date">{post.date}</p>
    </div>
  );
};

export default React.memo(Post);