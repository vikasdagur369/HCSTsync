// src/pages/Home.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [posts, setPosts] = useState([
    {
      content: "This is the first dummy post!",
      image:
        "https://via.placeholder.com/600/800/808080/FFFFFF?text=Placeholder+Image",
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

  const [groups] = useState([
    {
      name: "Web Development",
      image: "https://via.placeholder.com/150/808080/FFFFFF?text=Web+Dev",
      route: "/groups/web-development",
    },
    {
      name: "Game Development",
      image: "https://via.placeholder.com/150/808080/FFFFFF?text=Game+Dev",
      route: "/groups/game-development",
    },
    {
      name: "Blockchain",
      image: "https://via.placeholder.com/150/808080/FFFFFF?text=Blockchain",
      route: "/groups/blockchain",
    },
    {
      name: "Android Development",
      image: "https://via.placeholder.com/150/808080/FFFFFF?text=Android",
      route: "/groups/android-development",
    },
  ]);

  // Handle the post submit
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      const newPost = {
        content: postContent,
        image: postImage ? URL.createObjectURL(postImage) : null,
        author: "You",
        avatar: "https://via.placeholder.com/50/000000/FFFFFF?text=You",
        date: new Date().toLocaleDateString(),
      };
      setPosts([newPost, ...posts]);
      setPostContent("");
      setPostImage(null);
    }
  };

  const handleImageChange = (e) => {
    setPostImage(e.target.files[0]);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto flex gap-6">
      {" "}
      {/* Added gap between columns */}
      {/* Left Side: Posts */}
      <div className="flex-grow w-2/3">
        {" "}
        {/* Adjusted width */}
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
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
          {posts.map((post, index) => (
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
          ))}

          {posts.length === 0 && (
            <p className="text-center text-gray-600">No posts yet.</p>
          )}
        </div>
      </div>
      {/* Right Side: Groups */}
      <div className="w-1/3">
        {" "}
        {/* Adjusted width */}
        <h2 className="text-xl font-bold mb-4 text-gray-800">Explore Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((group, index) => (
            <Link
              key={index}
              to={group.route}
              className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition duration-200 ease-in-out"
            >
              <div className="flex flex-col items-center">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-24 h-24 rounded-md mb-3"
                />
                <h3 className="text-lg font-medium text-gray-800">
                  {group.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
