import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleItemClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
        setBlogDropdown(false); // Close the blog dropdown when clicking outside
      }
    };

    document.addEventListener("click", handleItemClick);

    return () => {
      document.removeEventListener("click", handleItemClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleBlogLinkEnter = () => {
    setBlogDropdown(true);
  };

  const handleBlogLinkLeave = () => {
    // You can adjust this logic based on your requirements
    // In this example, it checks if the cursor is not over the dropdown box
    if (!menuRef.current.contains(document.activeElement)) {
      setBlogDropdown(false);
    }
  };

  const handleBlogDropdownEnter = () => {
    setBlogDropdown(true);
  };

  const handleBlogDropdownLeave = () => {
    setBlogDropdown(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setBlogDropdown(false); // Close the dropdown after selection (you can adjust this as needed)
  };

  const menuItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About Us" },
    { id: 3, text: "Career" },
    {
      id: 4,
      text: "Blog",
      dropdown: true,
      submenu: ["Category 1", "Category 2", "Category 3"],
    },
    { id: 5, text: "Contact Us" },
  ];

  return (
    <nav
      className={`bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 border-b border-purple-800 font-body transition-all duration-300 ${
        scrolled ? "bg-opacity-95 shadow-lg" : ""
      }`}>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-3xl font-bold text-white transition duration-300 ease-in-out transform hover:scale-105">
          Fahad
        </div>
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
            {toggle ? (
              <AiOutlineClose className="text-4xl" />
            ) : (
              <AiOutlineMenu className="text-4xl" />
            )}
          </button>
        </div>
        <ul
          ref={menuRef}
          className={`md:flex md:space-x-4 text-lg font-bold uppercase text-white ${
            toggle ? "block" : "hidden"
          } md:block`}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:text-yellow-300 cursor-pointer py-2 md:py-0 md:px-4 transition duration-300 ease-in-out transform hover:scale-105 ${
                item.dropdown ? "relative" : ""
              }`}
              onMouseEnter={item.dropdown ? handleBlogLinkEnter : undefined}
              onMouseLeave={item.dropdown ? handleBlogLinkLeave : undefined}>
              {item.dropdown ? (
                <>
                  <span>{item.text}</span>
                  {blogDropdown && (
                    <ul
                      className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md"
                      onMouseEnter={handleBlogDropdownEnter}
                      onMouseLeave={handleBlogDropdownLeave}>
                      {item.submenu.map((category, index) => (
                        <li
                          key={index}
                          className="py-1 px-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleCategorySelect(category)}>
                          {category}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
          <li className="hover:text-yellow-300 cursor-pointer py-2 md:py-0 md:px-4 transition duration-300 ease-in-out transform hover:scale-105">
            <a href="/login">Login</a>
          </li>
        </ul>
        <div className="md:flex gap-4">
          <button className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
            Rental bus
          </button>
          <button className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
            Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
