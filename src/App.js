import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "./style.css";
import Nav from './Components/Nav.jsx';
import Surfing from './Components/Surfing.jsx';
import Contribution from './Components/Contribution.jsx';
import Payout from './Components/Payout.jsx';
import Social from './Components/Social.jsx';
import Topup from './Components/Topup.jsx';
import Settings from './Components/Settings.jsx';

export default function App() {
  return (
    <div className="container">
      <div className="content">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Surfing />}/>
          <Route path="contribution" element={<Contribution />}/>
          <Route path="payout" element={<Payout />}/>
          <Route path="social" element={<Social />}/>
          <Route path="topup" element={<Topup />}/>
          <Route path="settings" element={<Settings />}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}