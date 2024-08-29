
// import React from "react";

const blogs = [
  {
    title: "Exploring React Performance Optimization",
    summary:
      "Tips and techniques for improving performance in React applications.",
    link: "/React",
    image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/react-js-and-vite-js-logo-on-night-sky-background.jpg",
  },
  {
    title: "Mastering Tailwind CSS",
    summary:
      "A comprehensive guide to Tailwind CSS, a utility-first CSS framework that enables rapid UI development with a highly customizable and responsive design system.",
    link: "/Tailwind",
    image: "https://media.licdn.com/dms/image/D4D12AQHw9SjCddUhjQ/article-cover_image-shrink_720_1280/0/1715021638881?e=2147483647&v=beta&t=VuDjk7oMCOy2lSJtXjHerIg7QURxNCkcWdzUmfuVlu4",
  },
  {
    title: "Getting Started with Express.js",
    summary:
      "An introduction to Express.js, a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    link: "/Express",
    image: "https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA",
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-black max-w-3xl mx-auto text-center space-y-4 py-8 px-8 mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200">
          Insights from a Software Developer
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Explore the latest trends, best practices, and industry insights from
          our team of experienced software developers.
        </p>
      </div>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-200">Our Blogs</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-200 mb-2">{blog.title}</h2>
              <p className="text-gray-400 font-semibold mb-4">{blog.summary}</p>
              <a
                href={blog.link}
                className="inline-block bg-blue-600 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
