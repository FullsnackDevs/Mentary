import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Blog from './components/Blog';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Editor from './components/Editor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Editor/>} />
          <Route path="/blog/:docId" element={<Blog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);