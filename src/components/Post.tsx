import type { Post as PostType } from "./types";

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p className="author">By {post.author}</p>
      <p className="preview">{post.content.slice(0, 50)}...</p>
      <p className="date">{post.date}</p>
    </div>
  );
};

export default Post;