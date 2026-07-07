import React from "react";

const header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-gray-300 border-b border-gray-500 ">
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="logo">Shivam</div>
        {/* links */}
        <div className="links flex  justify-between gap-8 " >
          <a href="#" className="hover:text-blue-300 transition duration-300">Home</a>
          <a href="#" className="hover:text-blue-300 transition duration-300">Projects</a>
          <a href="#" className="hover:text-blue-300 transition duration-300">Skills</a>
          <a href="#" className="hover:text-blue-300 transition duration-300">About</a>
          <a href="#" className="hover:text-blue-300 transition duration-300">Contact</a>
        </div>
        {/* CTA */}
        <div className="cta">
          <a href="#" className="bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded">
            Let's Work Together
          </a>
        </div>
      </nav>
    </header>
  );
};

export default header;
