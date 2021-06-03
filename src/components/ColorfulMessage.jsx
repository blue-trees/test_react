import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "40px"
  };

  return <p style={contentStyle}>{children}</p>;
};
