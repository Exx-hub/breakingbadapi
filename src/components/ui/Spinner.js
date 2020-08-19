import React from "react";
import spinner from "../../img/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="spinner"
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
