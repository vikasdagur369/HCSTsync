// src/pages/Directory.jsx
import React, { useState } from "react";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTools,
  FaEnvelope,
  FaBriefcase,
  FaCommentDots,
} from "react-icons/fa";

const Directory = () => {
  const [filters, setFilters] = useState({
    company: "",
    year: "",
    location: "",
    skills: "",
  });

  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy users
  const users = [
    {
      name: "Alice Johnson",
      dp: "https://via.placeholder.com/50",
      email: "alice@example.com",
      company: "Tech Corp",
      location: "New York",
      passingYear: "2019",
      skills: "JavaScript, React",
    },
    {
      name: "Bob Smith",
      dp: "https://via.placeholder.com/50",
      email: "bob@example.com",
      company: "Web Solutions",
      location: "San Francisco",
      passingYear: "2020",
      skills: "Python, Django",
    },
    {
      name: "Charlie Brown",
      dp: "https://via.placeholder.com/50",
      email: "charlie@example.com",
      company: "Dev Studio",
      location: "Los Angeles",
      passingYear: "2021",
      skills: "Node.js, Express",
    },
    {
      name: "David Wilson",
      dp: "https://via.placeholder.com/50",
      email: "david@example.com",
      company: "Creative Agency",
      location: "Chicago",
      passingYear: "2018",
      skills: "Design, Figma",
    },
  ];

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Open message dialog
  const handleOpenMessageDialog = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Close message dialog
  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
    setMessage("");
  };

  // Send message logic
  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message sent to ${selectedUser.name}: "${message}"`);
      handleCloseModal();
    }
  };

  // Filter logic
  const filteredUsers = users.filter((user) => {
    return (
      (filters.company === "" ||
        user.company.toLowerCase().includes(filters.company.toLowerCase())) &&
      (filters.year === "" || user.passingYear === filters.year) &&
      (filters.location === "" ||
        user.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.skills === "" ||
        user.skills.toLowerCase().includes(filters.skills.toLowerCase()))
    );
  });

  return (
    <div className="p-4 max-w-6xl mx-auto flex gap-6">
      {/* Left Side: Filters */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <form>
          <div className="mb-4 relative">
            <label className="block mb-1">Company</label>
            <div className="relative">
              <FaBuilding className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="company"
                value={filters.company}
                onChange={handleFilterChange}
                className="w-full p-2 pl-10 text-sm text-gray-700 border rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Search by company"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block mb-1">Passing Year</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="year"
                value={filters.year}
                onChange={handleFilterChange}
                className="w-full p-2 pl-10 text-sm text-gray-700 border rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Search by passing year"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block mb-1">Location</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full p-2 pl-10 text-sm text-gray-700 border rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Search by location"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block mb-1">Skills</label>
            <div className="relative">
              <FaTools className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="skills"
                value={filters.skills}
                onChange={handleFilterChange}
                className="w-full p-2 pl-10 text-sm text-gray-700 border rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Search by skills"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Right Side: User List */}
      <div className="w-3/4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">User List</h2>
        {filteredUsers.length > 0 ? (
          <ul>
            {filteredUsers.map((user, index) => (
              <li
                key={index}
                className="flex justify-between items-center gap-4 p-4 border-b"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={user.dp}
                    alt={user.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-bold text-lg">{user.name}</h3>
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-gray-500" />
                      <p className="text-gray-700">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-gray-500" />
                      <p className="text-gray-700">{user.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-500" />
                      <p className="text-gray-700">{user.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaTools className="text-gray-500" />
                      <p className="text-gray-700">{user.skills}</p>
                    </div>
                  </div>
                </div>
                <button
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                  onClick={() => handleOpenMessageDialog(user)}
                >
                  <FaCommentDots className="w-6 h-6" />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found with the selected filters.</p>
        )}
      </div>

      {/* Message Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">
              Message {selectedUser.name}
            </h3>
            <textarea
              className="w-full p-2 border rounded-md mb-4"
              rows="4"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleSendMessage}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Directory;
