import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import ManajemenBuku from "./components/ManajemenBuku";

export default class App extends React.Component {
    render() {
        return (
          <div>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Beranda />} />
      
                <Route exact path="/manajemen-buku" element={<ManajemenBuku/>} />
              </Routes>
            </BrowserRouter>
          </div>
        );
    }
}
