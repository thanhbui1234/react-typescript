import { useEffect, useState } from "react";
import axios from "axios";

const tabs = ["posts", "comments", "albums"];

const UseEfectf8 = () => {
  const [posts, setPost] = useState([]);
  const [type, setType] = useState("posts");
  const [show, setShow] = useState(false);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${type}`)
      .then(({ data }) => setPost(data));
  }, [type]);
  useEffect(() => {
    const handleScrool = () => {
      setShow(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScrool);

    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  }, []);

  return (
    <div>
      <div>
        {tabs.map((tab) => {
          return (
            <button
              style={
                type === tab ? { background: "black", color: "white" } : {}
              }
              onClick={() => setType(tab)}
              key={tab}
            >
              {tab}
            </button>
          );
        })}
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
      {show && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          {""}
          Go to Top
        </button>
      )}
    </div>
  );
};

export default UseEfectf8;
