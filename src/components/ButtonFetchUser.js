import React from "react";
import "./ButtonFetchUser.css";
const ButtonFetchUser = props => {
  return (
    <button className="buttonUsers" onClick={props.click}>
      dodaj uzytkownika
    </button>
  );
};

export default ButtonFetchUser;
