import React, { useState } from "react";
import axios from "axios";


const [posts, setPosts] = useState([]);

async function getPosts() {
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
  setPosts(data);
}

function Posts() {
  return (
    <div>
      <div className="post__search">
        <button>← Back</button>
        <div className="post__search--container">
          <label className="post__search--label">Search by Id</label>
          <input type="number" />
          <button>Enter</button>
        </div>
      </div>
      <div className="post">
        <div className="post__title">{post.title}</div>
        <p className="post__body">{post.body}</p>
      </div>
      <div className="post">
        <div className="post__title">
          <div className="post__title--skeleton"></div>
        </div>
        <div className="post__body">
          <p className="post__body--skeleton"></p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
