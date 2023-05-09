import React from 'react'
import "./AnswerBox.css"

const Answer = ({answer}) => {
  return (
    <div className="eachAnswer">
    <div className="answerText">
      <div>
        <img
          src={process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"}
          alt="Profile"
          className="followerImage"
          style={{ width: "40px", height: "40px" }}
        />
        <div className="name" style={{ fontSize: "0.9rem" }}>
          <span>{}</span>
        </div>
      </div>
      <div>{answer.text}</div>
    </div>
    <div className="voteButtons">
      <div>
        <button>Upvote</button>
      </div>
      <div>
        <button>Downvote</button>
      </div>
    </div>
  </div>
  )
}

export default Answer