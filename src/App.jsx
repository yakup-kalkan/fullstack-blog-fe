// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import PostDetailPage from "./Pages/PostDetailPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className=" flex flex-col min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
