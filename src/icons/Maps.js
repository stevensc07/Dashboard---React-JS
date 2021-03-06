import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M17.545 5L12 1 6.455 5 0 1v18l6.455 4L12 19l5.545 4L24 19V1l-6.455 4zM7 7.073l4-2.886v13.068L7 20.14V7.073zm6-2.886l4 2.886v13.068l-4-2.885V4.187zM2 4.592l4 2.479v13.294l-4-2.479V4.592zm20 13.295l-4 2.479V7.071l4-2.479v13.295z"></path>
    </svg>
  );
}

export default Icon;
