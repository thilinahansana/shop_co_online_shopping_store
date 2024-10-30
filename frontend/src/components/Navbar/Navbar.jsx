import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-8">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiX className="text-2xl text-slate-800" />
            ) : (
              <HiMenuAlt3 className="text-2xl text-slate-800" />
            )}
          </button>
        </div>
        {/* Logo */}
        <div className="text-slate-800 text-3xl font-extrabold">SHOP.CO</div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-6 text-slate-800">
          {/* Dropdown with Shop */}
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center">
              <button onClick={toggleDropdown} className="hover:text-slate-600">
                Shop
              </button>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            {isDropdownOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                className="absolute z-30 bg-white shadow-lg rounded-lg p-4 mt-4"
              >
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-slate-600">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-600">
                      Clothing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-600">
                      Accessories
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
          <a href="#" className="hover:text-slate-600">
            On Sale
          </a>
          <a href="#" className="hover:text-slate-600">
            New Arrival
          </a>
          <a href="#" className="hover:text-slate-600">
            Brands
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex bg-gray-100 items-center px-6 py-3 rounded-full w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/2">
          <IoSearch className="text-xl text-slate-700" />
          <input
            type="text"
            className="bg-transparent border-none focus:ring-0 focus:outline-none px-2 text-slate-700 placeholder:text-slate-400 w-full"
            placeholder="Search for products..."
          />
        </div>

        {/* Cart and Login - Desktop */}
        <div className="flex space-x-4 text-slate-800">
          <a href="#" className="hover:text-slate-600 md:hidden">
            <IoSearch className="text-2xl font-bold" />
          </a>
          <a href="#" className="hover:text-slate-600">
            <LuShoppingCart className="text-2xl font-bold" />
          </a>
          <a href="#" className="hover:text-slate-600">
            <FaRegUserCircle className="text-2xl font-bold" />
          </a>
        </div>
      </div>

      {/* Mobile Menu - Collapsible */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100%" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute z-30 md:hidden  flex flex-col space-y-4 p-4 bg-white w-full"
          >
            {/* Shop with Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-slate-800 hover:text-slate-600 flex justify-between w-full"
              >
                Shop
                <span>
                  {isDropdownOpen ? (
                    <RiArrowDropDownLine className="text-2xl" />
                  ) : (
                    <RiArrowDropRightLine className="text-2xl" />
                  )}
                </span>
              </button>
              {isDropdownOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="mt-2"
                >
                  <ul className="space-y-2 p-4">
                    <li>
                      <a
                        href="#"
                        className="text-slate-800 hover:text-slate-600"
                      >
                        Electronics
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-slate-800 hover:text-slate-600"
                      >
                        Clothing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-slate-800 hover:text-slate-600"
                      >
                        Accessories
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
            <a href="#" className="text-slate-800 hover:text-slate-600">
              On Sale
            </a>
            <a href="#" className="text-slate-800 hover:text-slate-600">
              New Arrival
            </a>
            <a href="#" className="text-slate-800 hover:text-slate-600">
              Brands
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
