import React from "react";

const Header = () => {
  return (
    <header className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center p-4 bg-transparent">
      <nav className="hidden md:flex items-center space-x-6 bg-[#0000001a] py-2 px-2 rounded-full gap-3">
        <a href="#" className="hover:text-black hover:bg-white rounded-full py-2 px-4">
          Home
        </a>
        <a href="#" className="hover:text-black hover:bg-white rounded-full py-2 px-4">
          Services
        </a>
        <a href="#" className="hover:text-black hover:bg-white rounded-full py-2 px-4">
          Agents
        </a>
        <a href="#" className="hover:text-black hover:bg-white rounded-full py-2 px-4">
          About
        </a>
        <a href="#" className="hover:text-black hover:bg-white rounded-full py-2 px-4">
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Header;