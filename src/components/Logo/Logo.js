import React from "react";
import brain from "./brain-logo_transparent.png";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div className="ma4 mt0 di">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img alt="brain logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
