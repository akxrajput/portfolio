import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full flex items-center justify-end z-20 p-20 pointer-events-none">
      <button
        onClick={scrollToContact}
        className="bg-black px-6 py-3 text-white hover:bg-gray-500 rounded-full border-4 cursor-pointer pointer-events-auto"
      >
        Hire me
      </button>
      <i className="ri-more-2-fill text-3xl ml-2 text-green-500 pointer-events-auto"></i>
    </div>
  );
};

export default Header;
