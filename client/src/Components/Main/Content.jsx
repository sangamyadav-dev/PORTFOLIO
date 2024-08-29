"use client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const skillsCategory1 = ["React", "Next.js", "JavaScript", "Tailwind CSS"];
const skillsCategory2 = ["Git", "Node.js", "MongoDB", "Express.js"];

function Main() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Blogs");
  };

  const handleButtonClick = () => {
    window.location.href = "mailto:sangamyadav95k@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/sangamyadav", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/sangamyadav-dev", "_blank");
  };

  return (
    <main className="container mx-auto px-6 py-24">
      <div>
        <h4
          className={`text-2xl sm:text-2xl font-semibold mb-4 tracking-wide ${
            isVisible ? "animate-fadeInUp" : ""
          }`}
        >
          Hey, I'm,
        </h4>
        <h2
          className={`text-5xl sm:text-5xl font-bold mb-4 tracking-wide ${
            isVisible ? "animate-fadeInUp" : ""
          }`}
        >
          Sangam
        </h2>
        <h1
          className={`text-4xl font-semibold py-4 mb-4 text-gray-400 ${
            isVisible ? "animate-fadeInUp" : ""
          }`}
        >
          From concept to code to creation.
        </h1>
        <p
          className={`text-1xl font-semibold sm:text-lg text-gray-400 mb-8 py-4 ${
            isVisible ? "animate-fadeInUp" : ""
          }`}
        >
          I'm a <a className="text-rose-700">Software Engineer</a> with a
          passion for transforming ideas into impactful technology solutions.
          Skilled in both front-end and back-end development, I excel at
          creating dynamic and efficient applications using modern technologies.
          With a strong foundation in problem-solving and a commitment to
          user-centered design, I thrive on delivering high-quality, scalable
          software that meets diverse business needs and enhances user
          experiences. Specializing in building modern web applications.
        </p>
      </div>
      <button
        onClick={handleClick}
        className={`bg-transparent outline hover:outline-none text-lg hover:bg-rose-600 text-white font-semibold hover:text-white py-4 px-4 rounded ${
          isVisible ? "animate-fadeInScale" : ""
        }`}
      >
        Check out my Blogs!
      </button>
      {/* social icons */}
      <div className="flex gap-4 py-10 ">
        <div className="flex space-x-4">
          <button
            onClick={handleLinkedInClick}
            className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            LinkedIn
          </button>
          <button
            onClick={handleGitHubClick}
            className="px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            GitHub
          </button>
        </div>
      </div>
      {/* ABOUT */}
      <div className={` py-20 ${isVisible ? "animate-fadeInUp" : ""}`}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:text-left border-b-2 border-gray-300 pb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 mr-2"
            style={{ width: "24px", height: "24px" }}
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
          About Me
        </h2>
        <p className="text-base font-semibold text-gray-400 text-1xl text-left sm:text-lg max-w-3xl mx-auto sm:mx-0">
          As a dedicated Software Engineer, I excel in crafting dynamic and
          efficient web applications from the ground up. My proficiency spans
          both front-end and back-end technologies, allowing me to deliver
          integrated solutions that meet diverse business needs and enhance user
          experiences.
        </p>
      </div>
      {/* SKILLS */}
      <div className={` ${isVisible ? "animate-fadeInUp" : ""}`}>
        <p className=" text-left text-gray-400 font-semibold">
          Here are a few technologies I've been Work with :
        </p>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Grid */}
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skillsCategory1.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center p-4  shadow-md rounded-lg text-center"
                    >
                      <span className="text-lg font-semibold text-gray-400">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Second Grid */}
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skillsCategory2.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center p-4 shadow-md rounded-lg text-center"
                    >
                      <span className="text-lg font-semibold text-gray-400">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* GET IN TOUCH */}
      <section
        className={` p-10 mt-10 rounded-lg shadow-lg ${
          isVisible ? "animate-fadeInUp" : ""
        }`}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Get in Touch</h2>
          <p className="text-1xl font-semibold text-gray-400 mb-10">
            We’d love to hear from you! Whether you have a question, feedback,
            or just want to say hello, feel free to reach out. Our team is here
            to assist you and make sure you have the best experience possible.
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-transparent outline hover:outline-none text-1xl hover:bg-rose-500 text-white font-semibold hover:text-white py-3 px-4 rounded mb-8"
          >
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
export default Main;
