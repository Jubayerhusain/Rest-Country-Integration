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
      {/* main section  */}
      <main className="grid grid-cols-6 gap-5 w-11/12 mx-auto shadow-sm border-2 p-5">
        <div className="col-span-2">
          {/* Visited Country section start */}
          <div className=" h-[800px] border-2 border-pink-800"></div>
          {/* Visited Country section close */}
        </div>
        <div className="col-span-4">
          {/* all Country section start */}
          <div className="h-[800px]  w-full border-2 border-indigo-600">
            <h1>lorem500</h1>
          </div>
          {/* all Country section close */}
        </div>
      </main>
    </>
  );
}

export default App;
