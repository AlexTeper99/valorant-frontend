import React from "react";
import "./InfiniteSlider.styles.scss";

interface Props {
  characters: any[];
}

const InfiniteSlider: React.FC<Props> = ({ characters }) => {
  return (
    <div className="slider-container">
      {/* 1. */}

      <div className="slider-element">
        {/* 2. */}
        <div className="element-wrapper">
          {/* 3 */}
          {characters.map((character, i) => {
            return (
              <div key={i} style={{ border: "2px solid red" }}>
                <div className="image-container">
                  <img src={character} />
                </div>
              </div>
            );
          })}
          {characters.map((character, i) => {
            return (
              <div key={i} style={{ border: "2px solid red" }}>
                <div className="image-container">
                  <img src={character} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
