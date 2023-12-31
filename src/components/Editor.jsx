import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { SpeechToText } from "./SpeechToText";
import "../styles/blog.css";

function Editor() {
  const [value, setValue] = useState("");
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

  async function handleSubmit() {
    const markdownText = document.querySelector(".ql-editor").innerHTML;
    const displayText = document.querySelector(".ql-editor").innerText;

    const docRef = await addDoc(collection(db, "blogs"), {
      text: markdownText,
      displayText: displayText,
      createdTime: new Date().toLocaleString(),
      lastEditedTime: new Date().toLocaleString(),
    });
    console.log("Document written with ID: ", docRef.id);
    setValue("");
    window.location.reload();
  }

  return (
    <div id="editor" className="editor-section">
      <div className="tool-bar">
        <button onClick={handleSubmit} className="blog-btn submit-btn">
          Submit
        </button>
      </div>
      <div className="ml-2">
        <SpeechToText />
      </div>
      <div className="divide-section"></div>
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
