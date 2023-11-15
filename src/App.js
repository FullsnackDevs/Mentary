import Editor from "./components/Editor";
import Bot from "./components/Bot";
import Sidebar from "./components/Sidebar";
import { useEffect, useState} from "react";



export default function App() {
  const [state, setState] = useState(true);

  useEffect(() => {
      const menuIcon = document.querySelector("i.menu-icon");
      menuIcon.addEventListener("click", () => {
          setState(!state);
      });
  });


  return(
    <div className="flex justify-between h-screen w-full">
      
      <div className={state ? "sidebar fixed left-0 w-1/6 top-0 h-full bg-red-500" : "sidebar fixed left-0 w-16 top-0 h-full bg-red-500 invisible"}>
          <Sidebar/>
      </div>
      <Editor/>
      <div className="fixed right-0 top-0 w-1/6 h-full bg-gray-500">
          <Bot/>
      </div>
    </div>
  )
}