// src/pages/Home.jsx
import React, { useState } from "react";

function Home() {
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [posts, setPosts] = useState([
    // Dummy posts array
    {
      content: "This is the first dummy post!",
      image:
        "https://via.placeholder.com/600/800/808080/FFFFFF?text=Placeholder+Image", // Placeholder image
      author: "John Doe",
      avatar: "https://via.placeholder.com/50/000000/FFFFFF?text=JD",
      date: "December 17, 2022",
    },
    {
      content: "Exciting times at HCSTsync!",
      image:
        "https://via.placeholder.com/600/400/808080/FFFFFF?text=Placeholder+Image",
      author: "Jane Smith",
      avatar: "https://via.placeholder.com/50/000000/FFFFFF?text=JS",
      date: "December 15, 2022",
    },
  ]);

  // Handle the post submit
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      const newPost = {
        content: postContent,
        image: postImage ? URL.createObjectURL(postImage) : null,
        author: "You", // Replace with actual user data
        avatar: "https://via.placeholder.com/50/000000/FFFFFF?text=You", // Replace with user avatar
        date: new Date().toLocaleDateString(),
      };
      setPosts([newPost, ...posts]);
      setPostContent("");
      setPostImage(null);
    }
  };

  // Handle file input change
  const handleImageChange = (e) => {
    setPostImage(e.target.files[0]);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to the Feed
      </h1>

      {/* Post form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full p-2 border border-gray-300 rounded-md mb-2 resize-none"
            rows="4"
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="mb-4"
            accept="image/*"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Post
          </button>
        </form>
      </div>

      {/* Displaying posts */}
      <div>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md mb-4 relative"
            >
              <div className="flex items-center mb-3">
                <img
                  src={post.avatar}
                  alt={`${post.author} avatar`}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{post.author}</h3>
                  <p className="text-sm text-gray-600">{post.date}</p>
                </div>
              </div>
              <p className="mb-2">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="rounded-md max-w-full h-auto"
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No posts yet.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
