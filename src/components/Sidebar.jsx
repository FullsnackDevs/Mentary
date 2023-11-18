import { Link } from "react-router-dom";
import Editor from "./Editor";
import { collection, query, getDocs} from "firebase/firestore";
import { getDatabase} from "firebase/database";
import { db } from "../firebase";
import { createElement, useEffect, useLayoutEffect } from "react";


export default function Sidebar() {

  var check = false;
  useEffect(() => {
    async function getBlogs() {
      const q = query(collection(db, "blogs"));
  
      const querySnapshot = await getDocs(q);
      const list = document.querySelector('.tp-list');
      {querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().time);
        const child = document.createElement('li');
        child.innerHTML = `${doc.data().time}`
        list.appendChild(child);
        console.log(child)
  
      })}
    }

    if(!check){
      getBlogs()
      check = true;
    }

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
