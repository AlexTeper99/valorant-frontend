import React from "react";
import "./InfiniteSlider.styles.scss";

interface Props {
  characters: any[];
}

const InfiniteSlider: React.FC<Props> = ({ characters }) => {
  return (
    <div className={"slider-container "}>
      {/* 1. */}

      <div className="slider-element">
        {/* 2. */}
        <div className="slider-element-container">
          {/* 3 */}
          {characters.map((character, i) => {
            return (
              <div key={i} className="slider-image-container">
                <img src={character} />
              </div>
            );
          })}
          {characters.map((character, i) => {
            return (
              <div key={i} className="slider-image-container">
                <img src={character} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
