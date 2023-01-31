import React from "react";

function Contact() {
  const mailing = {};
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-slate-800 to-black w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>

          <div class="sm:h-70 bg-white p-6 rounded-lg shadow-lg mt-10 md:flex md:flex-row justify-evenly shadow-gray-200 sm:flex sm:flex-col grid h-70 place-items-center">
            <h2 class="lg:text-3xl font-bold mb-2 text-gray-800 mt-3 ">
              parakh.akshat25@gmail.com
            </h2>
            <a
              href="mailto:parakh.akshat25@gmail.com"
              className="mr-5 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-sky-500 hover:bg-sky-700 border-none"
              onClick={() => mailing}
            >
              Send Mail
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-black w-full text-white flex justify-center mb-5 pb-5">
        <p>Coded By Akshat Parakh </p>
      </footer>
    </div>
  );
}

export default Contact;
