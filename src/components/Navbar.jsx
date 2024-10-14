import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaGraduationCap, FaChevronDown, FaBook } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-gray-200 p-4 border-b shadow-md">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold text-blue-500">HCSTsync</h2>
      </div>
      <ul className="flex space-x-8 mx-auto relative">
        <li>
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-500 hover:text-blue-700 transition duration-200"
                : "text-gray-800 hover:text-gray-600 transition duration-200"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="relative group">
          {/* Toggle button for the dropdown */}
          <button
            className="flex items-center font-medium text-gray-800 transition duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaGraduationCap className="mr-2" />
            Alumni
            <FaChevronDown className="ml-1" />
          </button>

          {/* Dropdown content */}
          <ul
            className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <NavLink
                to="/alumni/directory"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
              >
                <FaBook className="mr-2 text-blue-500" />
                <span className="text-sm font-medium">Directory</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alumni/yearbook"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
              >
                <FaBook className="mr-2 text-blue-500" />
                <span className="text-sm font-medium">Yearbook</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/jobs"
            exact
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-500 hover:text-blue-700 transition duration-200"
                : "text-gray-800 hover:text-gray-600 transition duration-200"
            }
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            exact
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-500 hover:text-blue-700 transition duration-200"
                : "text-gray-800 hover:text-gray-600 transition duration-200"
            }
          >
            Gallery
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white cursor-pointer hover:bg-blue-700 transition duration-200">
        <FaUser className="text-2xl" />
      </div>
    </nav>
  );
}

export default Navbar;
