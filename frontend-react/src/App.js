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
    this.deleteData = this.deleteData.bind(this);
    this.getBook = this.getBook.bind(this);
  }

  componentDidMount() {
    this.getBook();
  }

  getBook() {
    axios
      .get("http://localhost:4000/book")
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  storeData(inputBook) {
    axios
      .post("http://localhost:4000/book/add", inputBook)
      .then((res) => {
        this.getBook();
        alert("Data berhasil ditambahkan");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  updateData(inputBook) {
    axios
      .put("http://localhost:4000/book/update/" + inputBook._id, inputBook)
      .then((res) => {
        this.getBook();
        alert("Data berhasil diperbarui");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  deleteData(book) {
    axios
      .delete("http://localhost:4000/book/delete/" + book._id)
      .then((res) => {
        this.getBook();
        alert("Data berhasil dihapus");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    if (this.state.books.length === 0) {
      return <p className="text-center">Loading ...</p>;
    } else {
      return (
        <div>
          {/* <div>
              <pre>{JSON.stringify(this.state, null, 3)}</pre>
          </div> */}
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
