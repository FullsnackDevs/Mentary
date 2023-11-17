import { Link } from "react-router-dom";
import Editor from "./Editor";
import { getDatabase } from "firebase/database";

const database = getDatabase();

export default function Sidebar() {
  return (
    <ul>
      <li className="menu-btn menu-item">
        <i className="fa-solid fa-x"></i>
        <span>Close</span>
      </li>
      <li className="divide-bar"></li>

      {/* <button Link="/" element={<Editor/>}>New</button> */}

      {/* FILE */}
      <li className="menu-item menu-syn">
        <i className=""></i>
        <span>FILE</span>
      </li>
      <li className="menu-item">
        <i className="fa-solid fa-plus"></i>
        <span>New</span>
      </li>
      <li className="menu-item">
        <i className="fa-solid fa-folder-plus"></i>
        <span>New Folder</span>
      </li>

      <li className="divide-bar"></li>

      {/* TEMPLATE */}
      <li className="menu-item menu-syn">
        <i className=""></i>
        <span>TEMPLATE</span>
      </li>
      <ul className="tp-list">
        <li className="tp-preview">
          <img
            src="https://preview.redd.it/y5zw8zs3rmp61.jpg?auto=webp&s=e3c86ed6132e112973ee848d27be3055a6d5202d"
            alt=""
          />
        </li>
        <li className="tp-preview">
          <img
            src="https://preview.redd.it/fern-stark-by-clou-v0-y7p09tit835b1.jpg?auto=webp&s=6bc9ece27fea6b73003a079f586343a097df45da"
            alt=""
          />
        </li>
      </ul>
      <li className="divide-bar"></li>

      {/* FOLDER */}
      <li className="menu-item menu-syn">
        <i className=""></i>
        <span>FOLDER</span>
      </li>
    </ul>
  );
}
