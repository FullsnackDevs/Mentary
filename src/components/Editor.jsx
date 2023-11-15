import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

function Editor(){
    Editor.formats = [
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
      ];

      Editor.modules = {
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
           {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean']
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      }
      


    const [value, setValue] = useState('');



    return (
        <div id="editor" className='h-full w-5/6 p-12'>
            <ReactQuill 
                theme="bubble" 
                value={value} onChange={setValue} 
                className='h-screen w-full'
                placeholder="Typing..."
                bounds={'#editor'}
                formats={Editor.formats}
                modules={Editor.modules}
            />;
        </div>
    ) 
}
export default Editor