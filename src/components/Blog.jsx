import { useEffect, useLayoutEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { collection, doc, updateDoc, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/blog.css";

const children = [];
var initialValue = "";
function Editor() {
  const params = useParams();
  useEffect(() => {
    async function updateBlog() {
      const q = query(collection(db, "blogs"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(function (doc) {
        if (doc.id === params.docId) {
          if (doc.data().text !== undefined) initialValue = doc.data().text;
        }
      });
    }
    updateBlog();
  }, [params]);
  const [value, setValue] = useState(initialValue);
  const [title, setTitle] = useState("");

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

  async function handleUpdate() {
    const docRef = doc(db, "blogs", params.docId);
    const updateDb = await updateDoc(docRef, {
      code: document.querySelector(".ql-editor").innerText,
      time: new Date().toLocaleString(),
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
        <button className="blog-btn delete-btn">Delete</button>
      </div>
      <ReactQuill
        theme="bubble"
        value={initialValue}
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
