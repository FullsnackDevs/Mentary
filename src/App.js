import { Bot } from "./components/Bot.jsx";
import Sidebar from "./components/Sidebar";
import "./styles/index.css";
import { useState, useLayoutEffect, useEffect } from "react";
import { Outlet } from "react-router-dom";

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

  useEffect(() => {
    document.querySelector(".ql-editor").style.fontSize = "large";
    document.querySelector(".ql-editor").style.letterSpacing = "2px";
  });

  return (
    <div className="flex justify-between h-screen w-full relative superbody">
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
      <Outlet />
      <Bot />
    </div>
  );
}
