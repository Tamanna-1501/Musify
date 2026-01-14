import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./musify/components/layout/Sidebar";
import Navbar from "./musify/components/layout/Navbar";
import Player from "./musify/components/layout/Player";
import Home from "./musify/pages/Home";

export default function App() {
  return (
    <>
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <Home />
      </div>

          <Player />
        </div>
        </>
        )
    }
