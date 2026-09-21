import type { Post as PostType } from "./types";
import Post from "./Post";

const posts: PostType[] = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Josiane",
    content: "React is a JavaScript library for building user interfaces, especially single-page applications where you need a fast, interactive experience.",
    date: "2026-09-20",
  },
  {
    id: 2,
    title: "Why TypeScript Matters",
    author: "David",
    content: "TypeScript adds static typing to JavaScript, helping you catch errors early and write more maintainable code as your project grows.",
    date: "2026-09-18",
  },
  {
    id: 3,
    title: "A Guide to Vite",
    author: "Josiane",
    content: "Vite is a fast build tool that offers instant server start and lightning-fast hot module replacement for modern web projects.",
    date: "2026-09-15",
  },
];

const PostList = () => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;