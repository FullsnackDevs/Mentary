import { useEffect, useLayoutEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { collection, doc, updateDoc, query, getDocs, deleteDoc  } from "firebase/firestore";
import { db } from "../firebase";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/blog.css";
import { useNavigate } from 'react-router-dom';

const children = [];
var initialValue = "";
var check = false;
function Editor() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const params = useParams();
  useLayoutEffect(() => {
    async function updateBlog() {
      const q = query(collection(db, "blogs"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(function (doc) {
        if (doc.id === params.docId) {
          if (doc.data().text !== undefined){
            initialValue = doc.data().text;
            document.querySelector('.ql-editor').innerHTML = initialValue;
            return;
          } 
        }
      });
    }
    updateBlog();
  }, [params]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      [{ size: [] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "list",
    "bullet",
    "align",
    "link",
    "image",
    "video",
  ];

  const handleChange = (e) => {
    setValue(e.target);
  };

  const handleDelete = async(e) => {
    await deleteDoc(doc(db, "blogs", params.docId));
    navigate('/', { replace: true });
  };

  async function handleUpdate() {
    const docRef = doc(db, "blogs", params.docId);
    const updateDb = await updateDoc(docRef, {
      text: document.querySelector(".ql-editor").innerText,
      createdTime: new Date().toLocaleString(),
    });
    console.log("Document update with ID: ", docRef.id);
    <Navigate to={`/blog/${params.docId}`} />;
  }

  return (
    <div id="editor" className="relative h-full w-5/6 p-32">
      <div className="tool-bar">
        <button onClick={handleUpdate} className="blog-btn">
          Save
        </button>
        <button className="blog-btn delete-btn" onClick={handleDelete}>Delete</button>
      </div>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={handleChange}
        className="h-screen w-full"
        placeholder="Typing..."
        bounds={"#editor"}
        formats={formats}
        modules={modules}
      />
    </div>
  );
}

export default Editor;
