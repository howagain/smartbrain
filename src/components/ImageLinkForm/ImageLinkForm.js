import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputHandler, onSubmitHandler }) => {
  return (
    <div>
      <div className="URLBox pa4 br3 shadow">
        <p className="f3">Enter Picture Here</p>
        <input
          className="f4 pa2 w-60 mr2"
          type="text"
          placeholder="Insert URL Here"
          onInput={onInputHandler}
        />
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple bn"
          onClick={onSubmitHandler}
        >
          Find Faces
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
