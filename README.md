# Dev Insights — Mini Blog

An internal blog platform for Dev Insights employees to share quick tips, insights, and updates related to web development. Built with React, TypeScript, and Vite.

## Installation & Running the App

This project uses **Vite** as the build tool.

1. Clone the repository:

git clone https://github.com/Josiane705/dev-insights-blog.git
cd dev-insights-blog

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

4. Open the local URL shown in your terminal (usually `http://localhost:5173/`) in your browser.

## Component Design

- **Header** — a functional component displaying the site logo and a "New Post" link. Wrapped with the `withLogger` HOC to demonstrate mount/unmount logging.

- **PostList** — a functional component holding a hardcoded array of sample posts, rendering a `Post` component for each one using `.map()` with a unique `key` prop.

- **Post** — a functional component that displays a single post's title, author, content preview, and date. I chose a functional component over a class component because it's simpler to read, avoids the extra boilerplate of `this` bindings, and lets me use `React.memo` directly for optimization.

- **App** — the root component that renders `Header` and `PostList` together.

## Styling

Two styling methods were used:
- **External CSS** (`src/styles/Post.css`) for general post layout and appearance.
- **Inline styles** for a small spacing adjustment on the post title.

**Conditional styling:** posts written by "Josiane" are highlighted with a light yellow background (`.highlighted` class) to visually distinguish them from other authors' posts.

## Optimization & HOCs

- **`React.memo`** wraps the `Post` component to prevent unnecessary re-renders when its props haven't changed.

- **`withLogger`** is a custom Higher-Order Component that logs a message to the console when a wrapped component mounts and unmounts. It is applied to the `Header` component.

- Each post rendered in `PostList` uses a unique `key` prop (`post.id`) as required by React for list rendering.

## Challenges

Initially, the highlighted post background color made the title text nearly invisible because the app's dark theme styles were overriding the highlight text color. This was fixed by adding a more specific CSS rule (`.highlighted h2`) targeting the title directly.

## Libraries Used

- React
- TypeScript
- Vite
- ESLint (for linting)

No additional external UI or styling libraries were used.