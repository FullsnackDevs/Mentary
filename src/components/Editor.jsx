import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";
import ToolbarEmoji from "./Emoji/ToolbarEmoji.js"
import EmojiBlot from "./Emoji/EmojiBlot.js";

Quill.register(
    {
      "formats/emoji": EmojiBlot,
      "modules/emoji-toolbar": ToolbarEmoji,
      "modules/emoji-shortname": quillEmoji.ShortNameEmoji
    },
    true
  );

function Editor(){
    const modules = {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
      
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          [{ color: [] }, { background: [] }],
          // [{ script: 'sub' }, { script: 'super' }],
          [{ align: [] }],
          ["link", "blockquote", "emoji"],
          ["clean"],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
        "emoji-toolbar": true,
        "emoji-textarea": false,
        "emoji-shortname": true,
      };

    const formats = [
        'header',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'color',
        'emoji'
      ];
      


    const [value, setValue] = useState('');



    return (
        <div id="editor" className='h-full w-5/6 p-32'>
            <ReactQuill 
                theme="bubble" 
                value={value} onChange={setValue} 
                className='h-screen w-full'
                placeholder="Typing..."
                bounds={'#editor'}
                formats={formats} 
                modules={modules}
            />;
        </div>
    ) 
}
export default Editor