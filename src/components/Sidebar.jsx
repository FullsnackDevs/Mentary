import { Link } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useLayoutEffect } from "react";
import "../styles/folder.css";
import { getTitle } from "../utils/getTitle.js";

const children = [];
var check = false;
export default function Sidebar() {
  useLayoutEffect(() => {
    async function getBlogs() {
      const q = query(collection(db, "blogs"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
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
          const blogTitle = getTitle(child.data().text);
          console.log(blogTitle);

          return (
            <li className="file" key={`/blog/${child.id}`}>
              <i className="ri-file-2-line"></i>
              <Link to={`/blog/${child.id}`}>{blogTitle}</Link>
            </li>
          );
        })}
      </ul>
    </ul>
  );
}
