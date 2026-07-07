import { ArrowRight, Download, MoveRight } from "lucide-react";
import React from "react";

const hero = () => {
  return (
    <div className="bg-gray-900 flex  justify-between p-6">
      <div className="left bg-dark-500 max-w-2xl p-7">
        <h1 className="text-7xl font-bold text-white">
          Building Fast, Modern & Socalable Web Applications
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Crafting high-performance user interfaces with a focus on precision
          and scalability. I bridge the gap between desing and enginnering to
          build digital experiences.
        </p>
          <p className="text-lg text-white mt-4">
            ✓ Available for freelance work
          </p>
        <div className="mt-6 p-6 flex flex-1 gap-4 ">
          
          <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-white">
            <span>View Projects</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-transparent border px-6 py-3 text-white">
            <span>Download Resume</span>
            <Download className="h-4 w-4" />
          </button>

        </div>
      </div>
      <div className="right flex bg-dark-500 max-w-xl p-7 justify-between items-center">
        <div className="absolute  h-[350px] w-[450px] rounded-full bg-blue-400/15 blur-[90px]" />
        <img
          src="../images/laptop.png"
          alt="Laptop Image"
          className="rounded-lg shadow-lg w-full z-3"
        />
      </div>
    </div>
  );
};

export default hero;
