import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./musify/components/layout/Sidebar";
import Navbar from "./musify/components/layout/Navbar";
import Player from "./musify/components/layout/Player";
import Home from "./musify/pages/Home";

export default function App() {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        
        <div className="main-content flex-1 flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      </div>


      )
      }
     
        
