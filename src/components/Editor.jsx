import { expressEmotion } from "./Bot.jsx";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

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

export function Editor() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target);
  };

  async function handleSubmit() {
    if (value === "" || value === null) {
      console.log("No essay written");
      return;
    }

    const text = document.querySelector(".ql-editor").textContent;
    const docRef = await addDoc(collection(db, "blogs"), {
      code: text,
      time: new Date().toLocaleString(),
    });

    expressEmotion(text);

    console.log("Document written with ID: ", docRef.id);

    setValue("");
  }

  return (
    <div id="editor" className="relative h-full w-5/6 p-32">
      <button
        id="submit-btn"
        onClick={handleSubmit}
        className="border px-6 py-4 top-0 radius"
      >
        Submit
      </button>
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
