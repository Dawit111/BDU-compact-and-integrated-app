import React, { useState } from "react";
import "./QuestionBox.css";
import AnswerBox from "../AnswerBox/AnswerBox";
const Question = ({ question }) => {
  const [viewAnsClicked, setViewAnsClicked] = useState(false);
  const [style, setStyle] = useState("")
  const answers = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem adipisci corporis debitis facere, quibusdam incidunt. Accusantium nulla quam sequi tempora, placeat voluptatum doloremque laboriosam corrupti, voluptas sunt error at quibusdam.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem adipisci corporis debitis facere, quibusdam incidunt. Accusantium nulla quam sequi tempora, placeat voluptatum doloremque laboriosam corrupti, voluptas sunt error at quibusdam.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem adipisci corporis debitis facere, quibusdam incidunt. Accusantium nulla quam sequi tempora, placeat voluptatum doloremque laboriosam corrupti, voluptas sunt error at quibusdam.",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem adipisci corporis debitis facere, quibusdam incidunt. Accusantium nulla quam sequi tempora, placeat voluptatum doloremque laboriosam corrupti, voluptas sunt error at quibusdam.",
    },
  ];
  return (
    <div className="eachQuestion">
      <div className="questionText">
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
        <div>Title: {question.Title}</div>
        <div>{question.text}</div>
      </div>
      <div className="answerButtons">
        <div>
          <button>View Answers ({answers.length})</button>
        </div>
        <div>
          <button>Give Answer</button>
        </div>
      </div>
      <div className="allAnswers">
        {
         answers.map((answer)=>(
            <AnswerBox answer={answer} />
         ))
        }
      </div>
    </div>
  );
};

export default Question;
