import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";

function Editor() {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}],
      [{size: []}],
      [{align: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
       [{ color: [] }, { background: [] }],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }

  const formats = [
    'header', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'color',
    'list', 'bullet', 'align',
    'link', 'image', 'video', 
  ]

  const handleChange = (e) => {
    setValue(e.target);
  }

  return (
    <div id="editor" className="h-full w-5/6 p-32">
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
      ;
    </div>
  );
}
export default Editor;
