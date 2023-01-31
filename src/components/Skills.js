import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import flutter from "../assets/flutter.jpg";
import cpp from "../assets/cpp.png";
import bootstrap from "../assets/bootstrap.png";
import responsive from "../assets/responsive.png";

function Skills() {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: github,
      title: "Github",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: flutter,
      title: "Flutter",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: cpp,
      title: "C/C++",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: responsive,
      title: "Responsive",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are the technologies I work with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                className="w-20 mx-auto items-center mt-5"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
