import Sidebar from "./Sidebar";
import Bot from "./Bot";
import { useEffect, useState} from "react";

export default function Editor(){
    const [state, setState] = useState(true);

    useEffect(() => {
        const menuIcon = document.querySelector("i.menu-icon");
        menuIcon.addEventListener("click", () => {
            setState(!state);
        });
    });
    return(
        <div className="bg-yellow-200 w-full h-full">
            <div className={state ? "sidebar fixed left-0 w-1/6 top-0 h-full bg-red-500" : "sidebar fixed left-0 w-16 top-0 h-full bg-red-500 invisible"}>
                <Sidebar></Sidebar>
            </div>
            
            <div className="fixed right-0 top-0 w-1/6 h-full bg-gray-500">
                <Bot></Bot>
            </div>
            <i className="menu-icon fa-solid fa-bars text-sm fixed top-0 left-24"></i>
        </div>
    )
}