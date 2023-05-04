import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import { Link, useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import { createChat } from "../../api/ChatRequests";

const ProfileCard = ({profUserData}) => {
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const [chatStart, setChatStart] = useState({})
  const makeChatPair = async()=> {
    const senderAndReceiver = {
    "senderId": user._id,
    "receiverId": profileUserId
    }
    setChatStart(()=>senderAndReceiver);
     
  }

  useEffect(() => {
    const fetchProfileUser = () => {
      
        setProfileUser(profUserData);
      
    };
    fetchProfileUser();
  }, [profUserData]);
useEffect(async()=>{
  await createChat(chatStart)
},[chatStart])
  
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={
            profileUser.coverPicture
              ? serverPublic + profileUser.coverPicture
              : serverPublic + "defaultCover.jpg"
          } alt="CoverImage" />
        <img
          src={
            profileUser.profilePicture
              ? serverPublic + profileUser.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="ProfileImage"
        />
      </div>
      <div className="ProfileName">
        <span>{profileUser.firstname} {profileUser.lastname}</span>
        <span>{profileUser.worksAt? profileUser.worksAt : 'Write about yourself'}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          {/* for profilepage */}
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{
                posts.filter((post)=>post.userId === profileUser._id).length
                }</span>
                <span>Posts</span>
              </div>{" "}
            </>
         
        </div>
        <hr />
      </div>
     {user._id !== profileUser._id && (
        <span>
          <Link to={"../chat"} onClick={()=>makeChatPair()} style={{ textDecoration: "none", color: "inherit" }}>
            Send Message
          </Link>
        </span>
     )}
      
      
    </div>
  );
};

export default ProfileCard;
