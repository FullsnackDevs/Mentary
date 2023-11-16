import Editor from "./components/Editor";
import Bot from "./components/Bot";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { useState, useLayoutEffect, useEffect } from "react";

export default function App() {
  const [state, setState] = useState(false);

  useLayoutEffect(() => {
    const menuIcons = document.querySelectorAll(".menu-btn");
    menuIcons.forEach((menuIcon) =>
      menuIcon.addEventListener("click", () => {
        setTimeout(() => {
          setState(!state);
        }, 50);
      })
    );
  });

  function handleClick() {
    console.log(document.querySelector(".ql-editor"))
    document.querySelector(".ql-editor").focus();
  }

  useEffect(() => {
    document.querySelector(".ql-editor").style.fontSize = 'large';
    document.querySelector(".ql-editor").style.letterSpacing = '2px';
  })

  return (
    <div className="flex justify-between h-screen w-full relative" onClick={handleClick}>
      <button className="menu-btn menu-icon fixed top-3 left-3 z-10">
        <i
          className="fa-solid fa-bars"
          style={{
            margin: "0 -2px 0 0",
          }}
        ></i>
      </button>
      <div className={state ? "sidebar active" : "sidebar"}>
        <Sidebar />
      </div>
      <Editor />
      <div className="fixed right-0 top-0 w-1/6 h-full bg-gray-500">
        <Bot />
      </div>
    </div>
  );
}
