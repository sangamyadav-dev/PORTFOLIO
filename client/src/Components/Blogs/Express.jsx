
// import React from 'react';

const ExpressArticle = () => {
  return (
    <div className="p-4 bg-gray-900 min-h-screen font-semibold">
      <div className="max-w-3xl mx-auto bg-gray-800 border border-gray-600 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
          Understanding Express.js: A Comprehensive Guide
        </h1>

        <p className="text-gray-300 mb-4">
          Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building server-side applications and APIs by providing a streamlined, unopinionated way to handle HTTP requests, routing, middleware, and more.
        </p>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-100 mb-4">
          Key Concepts
        </h2>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          1. Middleware
        </h3>
        <p className="text-gray-300 mb-4">
          Middleware functions are functions that have access to the request, response, and the next middleware function in the application’s request-response cycle. They are used to execute code, modify the request and response objects, end the request-response cycle, and call the next middleware function.
        </p>
        <pre className="p-4 bg-black rounded-md border border-gray-700 mb-4 overflow-x-auto">
          <code>
            {`// Basic Middleware Example\n
              const express = require('express');\n
              const app = express();\n\n
              // Middleware function\n
              app.use((req, res, next) => {\n
                console.log('Request received:', req.method, req.url);\n
                next(); // Call the next middleware function\n
              });\n\n
              app.get('/', (req, res) => {\n
                res.send('Hello, Express!');\n
              });\n\n
              app.listen(3000, () => {\n
                console.log('Server running on http://localhost:3000');\n
              });
            `}
          </code>
        </pre>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          2. Routing
        </h3>
        <p className="text-gray-300 mb-4">
          Routing refers to how an application’s endpoints (URIs) respond to client requests. Express.js allows you to define routes and handle different HTTP methods (GET, POST, PUT, DELETE) in a concise manner.
        </p>
        <pre className="p-4 bg-black rounded-md border border-gray-700 mb-4 overflow-x-auto">
          <code>
            {`// Routing Example\n
const express = require('express');\n
const app = express();\n\n
// Define a route\n
app.get('/hello', (req, res) => {\n
  res.send('Hello World!');\n
});\n\n
app.post('/data', (req, res) => {\n
  res.json({ message: 'Data received' });\n
});\n\n
app.listen(3000, () => {\n
  console.log('Server running on http://localhost:3000');\n
});`}
          </code>
        </pre>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          3. Error Handling
        </h3>
        <p className="text-gray-300 mb-4">
          Express.js provides a simple way to handle errors in your application. Error-handling middleware is used to catch errors and provide a response to the client.
        </p>
        <pre className="p-4 bg-black rounded-md border border-gray-700 mb-4 overflow-x-auto">
          <code>
            {`// Error Handling Example\n
const express = require('express');\n
const app = express();\n\n
// Define a route that triggers an error\n
app.get('/error', (req, res) => {\n
  throw new Error('Something went wrong!');\n
});\n\n
// Error-handling middleware\n
app.use((err, req, res, next) => {\n
  console.error(err.stack);\n
  res.status(500).send('Something broke!');\n
});\n\n
app.listen(3000, () => {\n
  console.log('Server running on http://localhost:3000');\n
});`}
          </code>
        </pre>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-100 mb-4">
          Benefits of Using Express.js
        </h2>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          1. Lightweight and Flexible
        </h3>
        <p className="text-gray-300 mb-4">
          Express.js is a lightweight framework with minimal core features, allowing you to add only the functionalities you need. This flexibility makes it easy to integrate with various databases, authentication methods, and other middleware.
        </p>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          2. Simplified API Development
        </h3>
        <p className="text-gray-300 mb-4">
          Express.js simplifies the process of creating RESTful APIs. Its routing and middleware features streamline handling different HTTP methods and processing incoming requests.
        </p>

        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
          3. Strong Community and Ecosystem
        </h3>
        <p className="text-gray-300 mb-4">
          Express.js has a strong community and a rich ecosystem of middleware and plugins. This support makes it easier to find solutions to common problems and extend your application’s functionality.
        </p>

        <p className="text-gray-300">
          For more information, visit the official{" "}
          <a
            href="https://expressjs.com"
            className="text-blue-400 hover:underline"
          >
            Express.js website
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ExpressArticle;
