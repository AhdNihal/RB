import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black z-40 text-white py-10 px-4 lg:px-0">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 Raylers Bentley. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/" className="hover:text-[#FED700]">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#FED700]">
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="mailto:enquiry@raylersbentley.com"
              className="hover:text-[#FED700]"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
