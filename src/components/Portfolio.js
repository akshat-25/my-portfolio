import React from "react";
import textutils from "../assets/portfolio/textutils.png";
import newsbuddy from "../assets/portfolio/newsbuddy.jpg";
import githubFinder from "../assets/portfolio/githubFinder.png";
import todo from "../assets/portfolio/todo.jpg";
// import moviz from "../assets/portfolio/moviz.jpg";
import fdb from "../assets/portfolio/fdb.png";
import nbweb from "../assets/portfolio/nbweb.png";
// import { Link } from "react-scroll";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: githubFinder,
      title: "Github Finder",
      link: "https://github.com/akshat-25/gitthub-finder",
    },
    {
      id: 2,
      src: nbweb,
      title: "Newsbuddy - Web",
      link: "https://github.com/akshat-25/NewsBuddy",
    },
    {
      id: 3,
      src: todo,
      title: "To-Do App",
      link: "https://github.com/akshat-25/Todo_App",
    },
    {
      id: 4,
      src: newsbuddy,
      title: "Newsbuddy App",
      link: "https://github.com/akshat-25/NewsBuddy",
    },
    {
      id: 5,
      src: textutils,
      title: "Textutils",
      link: "",
    },
    {
      id: 6,
      src: fdb,
      title: "Feedback App",
      link: "https://github.com/akshat-25/Feedback-App",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-slate-800 w-full h-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="mt-4 flex flex-row justify-center text-2xl">
                {title}
              </p>
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border rounded border-white">
                  Demo
                </button> */}
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border rounded border-white flex justify-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
