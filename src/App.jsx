import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Forms from './components/Forms';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/footer" element={<Blogs />} />
          <Route path="/forms" element={<Forms />} />
        <Route path="/" element={<Home />}>
          <Route path="/footer" element={<Blogs />} />
          <Route path="/forms" element={<Forms />} />
        <Route path="/" element={<Home />}>
          <Route path="/footer" element={<Blogs />} />
          <Route path="/forms" element={<Forms />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
