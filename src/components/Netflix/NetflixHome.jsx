import React from "react";
import { useSelector } from "react-redux";

export const NetflixHome = () => {
  const state = useSelector((state) => state);
  console.log("state...", state);
  const myTheme = {
    backgroundColor: state.theme.theme == "dark" ? "black" : "white",
  };
  return (
    <div style={myTheme}>
      {
        state?.theme?.theme
      }
      <h1>NetflixHome</h1>
    </div>
  );
};
