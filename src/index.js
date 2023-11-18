import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Editor } from "./components/Editor.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Editor />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
