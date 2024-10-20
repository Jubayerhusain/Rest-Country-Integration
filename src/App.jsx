/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navber from "./components/Navber";

function App() {
  return (
    <>
      <div>
        {/* header section start  */}
        <Navber></Navber>
        {/* header section close  */}
      </div>
      <div>
        {/* Visited Country section start */}
        <div></div>
        {/* Visited Country section close */}
      </div>
      <div>
        {/* all Country section start */}
        <div></div>
        {/* all Country section close */}
      </div>
    </>
  );
}

export default App;
