import { Link } from "react-router-dom";
import { collection, query, getDocs} from "firebase/firestore";
import { db } from "../firebase";
import {useLayoutEffect } from "react";


const children = [];
export default function Sidebar() {

  useLayoutEffect(() => {
    async function getBlogs() {
      const q = query(collection(db, "blogs"));
  
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(function(doc) {
        children.push(doc);
      })
    }
    getBlogs();
  }, [])

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
        {console.log(children.length)}
       {children.map((child) => {
        console.log(child);
        return (
          <li>
            <Link 
              to={`/blog/${child.id}`}
              key={`/blog/${child.id}`}
            >
                {child.data().time}
            </Link>
          </li>
        )
       })}
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
