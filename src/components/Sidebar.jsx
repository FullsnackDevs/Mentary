import { Link } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useLayoutEffect } from "react";
import "../styles/folder.css";

const children = [];
var check = false;
export default function Sidebar() {
  useLayoutEffect(() => {
    async function getBlogs() {
      const q = query(collection(db, "blogs"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(function (doc) {
        children.push(doc);
      });
    }
    if (!check) {
      getBlogs();
      check = true;
    }
  }, []);

  return (
    <ul>
      <li className="menu-item menu-btn">
        <i className="ri-close-line"></i>
        <span>Close</span>
      </li>
      <li className="divide-bar"></li>

      {/* FOLDER */}
      <li className="menu-item menu--section-title">
        <i className=""></i>
        <span>FOLDER</span>
      </li>

      <ul className="folder-list">
        <li className="file file-new--button">
          <i className="ri-add-line"></i>
          <a>New</a>
        </li>
        {children.map((child) => {
          return (
            <li className="file" key={`/blog/${child.id}`}>
              <i className="ri-file-2-line"></i>
              <Link to={`/blog/${child.id}`}>{child.data().time}</Link>
            </li>
          );
        })}
      </ul>
    </ul>
  );
}
