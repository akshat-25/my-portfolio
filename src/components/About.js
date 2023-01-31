import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Hello! My name is <b>Akshat Parakh</b> I am a front-end web developer
          , i like designing and developing web applications, i love working
          with react js and am very fluent in it i also develop cross platform
          mobile applications with flutter , i am also a competitive coder, I am
          currently pursuing my btech in cse from <b>SKIT Jaipur</b>. Apart from
          coding i like music.
        </p>
        <br />
      </div>
    </div>
  );
}

export default About;
