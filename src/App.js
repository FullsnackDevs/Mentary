import { Bot } from "./components/Bot.jsx";
import Sidebar from "./components/Sidebar";
import "./styles/index.css";
import { useState, useLayoutEffect } from "react";
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

  return (
    <div className="flex justify-between h-screen w-full relative superbody">
      {/* MENU BUTTON */}
      <button className="menu-btn menu-icon">
        <i
          className="ri-menu-line"
          style={{
            margin: "0 -2px 0 0",
          }}
        ></i>
      </button>

      {/* SIDEBAR */}
      <div className={state ? "sidebar active" : "sidebar"}>
        <Sidebar />
      </div>

      {/* EDITOR */}
      <Outlet />

      {/* BOT SECTION */}
      <Bot />
    </div>
  );
}
