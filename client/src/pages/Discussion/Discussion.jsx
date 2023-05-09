import React, { useState } from "react";
import "./Discussion.css";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import NavIcons from "../../components/NavIcons/NavIcons";
import Category from "../../components/Category/Category";
import DiscussionBox from "../../components/DiscussionBox/DiscussionBox";
import NavBar from "../../components/NavBar/NavBar";

const Discussion = () => {
  const Categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Computer Engineering" },
    { id: 3, name: "Electrical Engineering" },
    { id: 4, name: "Mechanical Engineering" },
    { id: 5, name: "Chemical Engineering" },
    { id: 6, name: "Industrial Engineering" },
    { id: 7, name: "Automotive Engineering" },
  ];

  const [currentCategory, setCurrentCategory] = useState(null);
  return (
    <>
      <NavBar />
      <div className="Discussion">
        {/* Left side */}
        <div className="Left-side-discussion">
          <div className="categoryText">
            <h2>Q&A Categories</h2>
          </div>
          <div className="Discussion-container">
            <div className="Discussion-list">
              {Categories.map((category) => (
                <div onClick={() => setCurrentCategory(category)}>
                  <Category data={category} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right side discussion*/}
        <div className="Right-side-discussion">
          <DiscussionBox category={currentCategory} />
        </div>
      </div>
    </>
  );
};

export default Discussion;
