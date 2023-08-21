import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';
import "../css/Post.css"
import heart from "../images/heart.jpg";
import more_icon from "../images/more_icon.jpg";
import share from "../images/share.jpg";

export const PostView = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchPost();
	}, []);

	const fetchPost = async () => {
		try {
			const response = await axios.get("https://instaclone-zeoc.onrender.com/getPost");
			setPosts(response.data.data);
		} catch (error) {
			alert("Error in getting data");
		}
	};

	return (
		<div className="posts">
			<div>
      {posts.map((post) => ( 
        <div key={post.id} className="post">
          <div className="top">
            <div className="left">
              <h3>{post.name}</h3>
              <h3 id="city">{post.location}</h3>
            </div>
            <div className="right">
              <img src={more_icon} alt="" />
            </div>
          </div>
          <div className="middle">
            <img  src={`https://instaclone-zeoc.onrender.com/${post.PostImage}`} style={{"width":"100%",height:"30%"}} alt="Post_pictures" />
          </div>
          <div className="bottom">
            <div className="post-footer">
              <div className="left">
                <div className="bottom-top">
                  <img src={heart} alt="icon" />
                  <img src={share} alt="icon" />
                </div>
                <p>{post.likes} Likes</p>
              </div>
              <div className="right">
                <span>{post.Date}</span>
              </div>
            </div>
            <p>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
		</div>
	);
};
