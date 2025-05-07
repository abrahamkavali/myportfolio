import React from "react";
import profile from "../assets/images/profile.png";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0 md:mr-6">
            <img
              className="h-16 w-16 rounded-full border-2 border-white shadow-md"
              src={profile}
              alt="Abraham Kavali"
            />
          </div>
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold tracking-wide">Abraham Kavali</h1>
            <p className="text-sm mt-1">
              Aspiring ML Engineer | MS in Computer Science | Ex-Hclite
            </p>
            <div className="mt-2">
              <a
                href="mailto:akavali@aum.edu"
                className="inline-block bg-white text-indigo-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
