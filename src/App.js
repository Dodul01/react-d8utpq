import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./style.css";
import Nav from './Components/Nav.jsx';
import Surfing from './Components/Surfing.jsx';

export default function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Surfing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
