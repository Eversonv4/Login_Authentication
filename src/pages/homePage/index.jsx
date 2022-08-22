import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { getPosts } from "../../services/api";

export default function HomePage() {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await getPosts();
      setPosts(response.data);
      console.log(response.data);
    };
    loadData();
  }, []);

  return (
    <div>
      {String(isAuthenticated)}
      <h1>Home Page</h1>
      <button onClick={logout}>Logout</button>
      <button>Get Posts</button>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body.replace(/<[^>]*>/g, "")}</p>
            <p>{post.description}</p>
            <img
              width="200"
              height="200"
              src={post.creatorData.avatar}
              alt={post.creatorData.name}
            />
            <h5>{post.creatorData.name}</h5>
          </div>
        ))}
    </div>
  );
}
