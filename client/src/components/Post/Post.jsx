import React, { useEffect, useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/Like.png";
import NotLike from "../../img/Notlike.png";
import { likePost } from "../../api/PostsRequests";
import { deletePost } from "../../api/PostsRequests";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Post = ({ data ,location}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  //const [postOwner, setPostOwner] = useState(data.postOwnerData[0] ? data.postOwnerData[0].username :"")
  const postOwner = data.postOwnerData[0] ? data.postOwnerData[0] : "";
  // profile data babi added
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleDelete = async() => {
   // window.alert("are you sure");
    const id = data._id
       await deletePost(id, data);
  }
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  return (
    <div className="Post">
      <div className="detail">
        <div>
          <img
            src={
              publicFolder + postOwner.profilePicture
                ? publicFolder + postOwner.profilePicture
                : publicFolder + "defaultProfile.png"
            }
            alt="profile"
            className="followerImage"
          />
          <div className="name">
           
            <Link to={`/profile/${postOwner._id}`} style={{ textDecoration: "none", color: "inherit" }}>
             <span>@{postOwner.username}</span>
          </Link>
          </div>
        </div>
        { location==="profilePage" &&
         <button className={"options"} onClick={()=>handleDelete()}>
          delete
        </button>
        }
      </div>

      <div className="description">
        <p># {data.desc}</p>
      </div>

      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
    </div>
  );
};

export default Post;
