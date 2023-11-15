import Editor from "./components/Editor";
import Bot from "./components/Bot";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { useState, useLayoutEffect } from "react";

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

  return (
    <div className="flex justify-between h-screen w-full relative">
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
