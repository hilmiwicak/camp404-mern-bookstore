import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import ManajemenBuku from "./components/ManajemenBuku";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.storeData = this.storeData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.deleteDa = this.deleteData.bind(this);
  }

  storeData(inputBook) {
    console.log(inputBook);
    alert("Data berhasil ditambahkan");
  }

  updateData(inputBook) {
      console.log(inputBook);
      alert("Data berhasil diperbarui");
  }

  deleteData(book) {
    console.log(book);
    alert("Data berhasil dihapus");
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Beranda />} />

            <Route
              exact
              path="/manajemen-buku"
              element={
                <ManajemenBuku
                  bookList={this.state.books}
                  store={this.storeData}
                  update={this.updateData}
                  remove={this.deleteData}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
