
// import React from 'react';

const TailwindArticle = () => {
  return (
    <div className="p-4 bg-gray-900 min-h-screen font-semibold">
      <div className="max-w-3xl mx-auto bg-gray-800 border border-gray-600 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
          Understanding Tailwind CSS: A Comprehensive Guide
        </h1>

        <p className="text-gray-300 mb-4">
          Tailwind CSS is a utility-first CSS framework designed to enable rapid UI development. Unlike traditional CSS frameworks that provide predefined components, Tailwind focuses on providing low-level utility classes that you can combine to build custom designs. This approach offers flexibility and encourages a modular, maintainable approach to styling.
        </p>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-100 mb-4">
          Key Concepts
        </h2>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          1. Utility-First Approach
        </h3>
        <p className="text-gray-300 mb-4">
          Tailwind CSS uses a utility-first approach, meaning it provides a set of utility classes for common CSS properties such as margin, padding, color, and typography. Instead of creating custom CSS classes, you apply these utility classes directly to your HTML elements.
        </p>
        <pre className="p-4 bg-black rounded-md border border-gray-700 mb-4 overflow-x-auto">
          <code>
            {`<!-- HTML Example with Tailwind CSS Utility Classes -->\n
<div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">\n
  <h1 className="text-xl font-bold">Hello, Tailwind!</h1>\n
  <p className="mt-2">This is a sample component styled using Tailwind CSS.</p>\n
</div>`}
          </code>
        </pre>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          2. Responsive Design
        </h3>
        <p className="text-gray-300 mb-4">
          Tailwind CSS includes responsive design utilities that make it easy to create layouts that work on various screen sizes. By using responsive modifiers, you can apply different styles based on the screen size.
        </p>
        <pre className="p-4 bg-black rounded-md border border-gray-700 mb-4 overflow-x-auto">
          <code>
            {`<!-- Responsive Design Example -->\n
<div className="p-4 bg-green-500 text-white rounded-lg shadow-md">\n
  <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Responsive Heading</h1>\n
  <p className="text-sm md:text-base lg:text-lg">This text adjusts its size based on the screen width.</p>\n
</div>`}
          </code>
        </pre>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          3. Customization
        </h3>
        <p className="text-gray-300 mb-4">
          Tailwind CSS is highly customizable. You can modify the default configuration to suit your project's design needs. Customizing Tailwind allows you to define your own color palette, spacing values, breakpoints, and more.
        </p>
        <pre className="p-4 bg-black rounded-md border border-gray-700 mb-4 overflow-x-auto">
          <code>
            {`// tailwind.config.js\n
module.exports = {\n
  theme: {\n
    extend: {\n
      colors: {\n
        customBlue: '#1E40AF',\n
      },\n
      spacing: {\n
        '128': '32rem',\n
      },\n
    },\n
  },\n
  variants: {},\n
  plugins: [],\n
}`}
          </code>
        </pre>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-100 mb-4">
          Benefits of Using Tailwind CSS
        </h2>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          1. Rapid Prototyping
        </h3>
        <p className="text-gray-300 mb-4">
          Tailwind's utility-first approach enables rapid prototyping. You can quickly assemble complex layouts without writing custom CSS. This speed and flexibility are particularly beneficial for iterative design processes.
        </p>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          2. Consistency
        </h3>
        <p className="text-gray-300 mb-4">
          By using a consistent set of utility classes, you maintain a uniform design system across your application. Tailwind’s configuration options ensure that your design tokens (colors, spacing, typography) are consistent throughout your project.
        </p>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          3. Reduced CSS File Size
        </h3>
        <p className="text-gray-300 mb-4">
          Tailwind CSS, combined with PurgeCSS (or similar tools), removes unused CSS from your final build. This results in a smaller CSS file size compared to traditional CSS frameworks that include unused styles.
        </p>

        <p className="text-gray-300">
          For more information, visit the official{" "}
          <a
            href="https://tailwindcss.com"
            className="text-blue-400 hover:underline"
          >
            Tailwind CSS website
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TailwindArticle;
