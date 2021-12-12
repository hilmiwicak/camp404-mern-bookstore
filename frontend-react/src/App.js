import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import ManajemenBuku from "./components/ManajemenBuku";

export default class App extends React.Component {
  state = {
    books: [
      {
        _id: 1,
        judul: "Laskar Pelangi",
        pengarang: "Andrea Hirata",
        harga: 86906,
        stok: 7,
      },
      {
        _id: 2,
        judul: "Bumi",
        pengarang: "Tere Liye",
        harga: 85009,
        stok: 5,
      },
    ],
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Beranda />} />

            <Route exact path="/manajemen-buku" element={<ManajemenBuku bookList={this.state.books} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
