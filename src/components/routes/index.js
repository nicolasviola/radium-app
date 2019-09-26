import React from "react";
import App from "../app/app.js";
import MainScreenHooks from "./main-screen-hooks/main-screen.js";

class Route extends React.Component {
  render() {
    return (
      <App>
        <MainScreenHooks />
      </App>
    );
  }
}

export default Route;
