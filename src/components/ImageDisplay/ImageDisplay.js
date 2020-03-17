import React from "react";
import "./ImageDisplay.css";

const ImageDisplay = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <div>
        <img
          id="enteredImg"
          alt=""
          src={imageUrl}
          style={{ maxWidth: "500px", height: "auto" }}
        />
        </div>
        <div
          className="bounding-box"
          style={{
            top: 100 * box.top_row + "%",
            right: 100 - box.right_col * 100 + "%",
            bottom: 100 - box.bottom_row * 100 + "%",
            left: box.left_col * 100 + "%"
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageDisplay;
