import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "/logo_bntly.svg";

function Navbar() {
  return (
    <nav className="bg-gray-400 z-50 bg-opacity-15 w-full absolute text-white px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          <img
            src={CompanyLogo}
            className=" h-[5vh] w-auto lg:h-[6vh]"
            alt="Raylers Bentley"
          />
        </Link>
        {/* <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-[#FED700]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#FED700]">
              Products
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#FED700]">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#FED700]">
              Contact
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;
