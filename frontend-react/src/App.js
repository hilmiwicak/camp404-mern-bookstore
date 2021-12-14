import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import ManajemenBuku from "./components/ManajemenBuku";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };

    this.storeData = this.storeData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.deleteDa = this.deleteData.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        this.setState({
          books: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
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
    if (this.state.books.length === 0) {
      return <p className="text-center">Loading ...</p>;
    } else {
      return (
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={<Beranda bookList={this.state.books} />}
              />

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
}
