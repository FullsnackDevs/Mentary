import { useEffect, useLayoutEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { collection, addDoc, query, getDocs} from "firebase/firestore"; 
import { db } from "../firebase";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const children = [];
var initialValue = "";
function Editor() {
  const params = useParams();
  useLayoutEffect(() => {
    async function updateBlog() {
      const q = query(collection(db, "blogs"));
  
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach(function(doc) {
        if(doc.id === params.docId){
         if(doc.data().code != undefined) initialValue = doc.data().code;
        }
      })
    }
    updateBlog();
  }, [])
  const [value, setValue] = useState(initialValue);
  const [title, setTitle] = useState("");

  
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

  async function handleUpdate(){
    const docRef = await addDoc(collection(db, "blogs"), {
      code: document.querySelector('.ql-editor').innerHTML,
      time: new Date().toLocaleString(),
    });
    console.log("Document written with ID: ", docRef.id);
    setValue("");
  }

  return (
    <div id="editor" className="relative h-full w-5/6 p-32">
      <button onClick={handleUpdate} className="absoulute border px-6 py-4 top-0 radius">Update</button>
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
