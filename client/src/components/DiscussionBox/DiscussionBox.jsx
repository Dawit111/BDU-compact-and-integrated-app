import React from 'react'
import "./DiscussionBox.css"
import QuestionBox from '../QuestionBox/QuestionBox'
const DiscussionBox = ({category}) => {
  const question = [
    {
      id: 1,
      Title: "technology",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem adipisci corporis debitis facere, quibusdam incidunt. Accusantium nulla quam sequi tempora, placeat voluptatum doloremque laboriosam corrupti, voluptas sunt error at quibusdam."
    },
    {
      id: 2,
      Title: "business",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem adipisci corporis debitis facere, quibusdam incidunt. Accusantium nulla quam sequi tempora, placeat voluptatum doloremque laboriosam corrupti, voluptas sunt error at quibusdam."
    },
    {
      id: 3,
      Title: "History",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem adipisci corporis debitis facere, quibusdam incidunt. Accusantium nulla quam sequi tempora, placeat voluptatum doloremque laboriosam corrupti, voluptas sunt error at quibusdam."
    },
    {
      id: 4,
      Title: "Geography",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem adipisci corporis debitis facere, quibusdam incidunt. Accusantium nulla quam sequi tempora, placeat voluptatum doloremque laboriosam corrupti, voluptas sunt error at quibusdam."
    }
  ]
  return (
    <>
      <div className="DiscussionBox-container">
        {category ? (
          <>
            {/* discussion-header */}
            <div className="discussion-header">
              <div className="follower">
                <div>
                  <img
                    src={
                      process.env.REACT_APP_PUBLIC_FOLDER +
                          "defaultProfile.png"
                    }
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="name" style={{ fontSize: "0.9rem" }}>
                    <span>
                      {category?.name}
                    </span>
                  </div>
                </div>
                <div>
                  <button style={{padding:".4rem", borderRadius: "12px"}}>Ask Question</button>
                </div>
              </div>
              <hr
                style={{
                  width: "99%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
          </>
        ) : (
          <span className="discussionbox-empty-message">
            Tap on a Category to filter discussion...
          </span>
        )}
        <div className="discussion-body">
          {
            question.map((question)=>(
              <QuestionBox question={question}/>
            ))
          }
           
        </div>
      </div>
    </>
  )
}

export default DiscussionBox