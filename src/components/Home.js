import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll/modules";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl lg:text-7xl md:text-6xl font-bold text-white ">
            Hi, I'm Akshat Parakh
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I design and code web, desktop and mobile applications and also do
            competitive coding.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duratin={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl"
            src="https://cdni.iconscout.com/illustration/premium/thumb/coding-programming-5380222-4498687.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
