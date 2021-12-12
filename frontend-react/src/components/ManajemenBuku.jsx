import React, { Fragment } from "react";

export default class ManajemenBuku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBook: {
        judul: "",
        pengarang: "",
        harga: "",
        stok: 0,
      },
      form: {},
    };

    this.handleJudul = this.handleJudul.bind(this);
    this.handlePengarang = this.handlePengarang.bind(this);
    this.handleHarga = this.handleHarga.bind(this);
    this.handleStok = this.handleStok.bind(this);
    this.submitCreate = this.submitCreate.bind(this);
    this.showCreate = this.showCreate.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  handleJudul(event) {
    this.setState((prevState) => ({
      inputBook: {
        ...prevState.inputBook,
        judul: event.target.value,
      },
    }));
  }

  handlePengarang(event) {
    this.setState((prevState) => ({
      inputBook: {
        ...prevState.inputBook,
        pengarang: event.target.value,
      },
    }));
  }

  handleHarga(event) {
    this.setState((prevState) => ({
      inputBook: {
        ...prevState.inputBook,
        harga: event.target.value,
      },
    }));
  }

  handleStok(event) {
    this.setState((prevState) => ({
      inputBook: {
        ...prevState.inputBook,
        stok: event.target.value,
      },
    }));
  }

  submitCreate(event) {
    event.preventDefault();
    this.props.store(this.state.inputBook);
  }

  showCreate() {
    this.setState({
      form: "create",
    });
  }

  showEdit(book) {
    this.setState({
      inputBook: book,
      form: "edit",
    });
  }

  submitUpdate(event) {
    event.preventDefault();
    this.setState({
      form: "",
    });
    this.props.update(this.state.inputBook);
  }

  render() {
    return (
      <Fragment>
        <div className="container mt-3">
          {/* <div className="mt-3">
            <pre>{JSON.stringify(this.state, null, 3)}</pre>
          </div> */}
          <h1 className="text-center">Manajemen Buku</h1>

          {this.state.form === "create" && (
            <div id="formTambah">
              <h5>Tambah Buku</h5>
              <hr />
              <form className="form row" onSubmit={this.submitCreate}>
                <div className="col-3 my-3">
                  <input
                    type="text"
                    name="judul"
                    className="form-control mx-2"
                    placeholder="Judul"
                    onChange={this.handleJudul}
                  />
                </div>
                <div className="col-3 my-3">
                  <input
                    type="text"
                    name="pengarang"
                    className="form-control mx-2"
                    placeholder="Pengarang"
                    onChange={this.handlePengarang}
                  />
                </div>
                <div className="col-2 my-3">
                  <input
                    type="text"
                    name="harga"
                    className="form-control mx-2"
                    placeholder="Harga"
                    onChange={this.handleHarga}
                  />
                </div>
                <div className="col-2 my-3">
                  <input
                    type="number"
                    name="stok"
                    className="form-control mx-2"
                    placeholder="stok"
                    onChange={this.handleStok}
                  />
                </div>
                <div className="col-2 my-3">
                  <input
                    type="submit"
                    className="btn btn-primary ml-5"
                    value="Simpan"
                  />
                </div>
              </form>
            </div>
          )}

          {this.state.form === "edit" && (
            <div id="formUbah">
              <h5>Ubah</h5>
              <hr />
              <form className="form row" onSubmit={this.submitUpdate}>
                <div className="col-3 my-3">
                  <input
                    type="text"
                    name="judul"
                    className="form-control mx-2"
                    placeholder="Judul"
                    onChange={this.handleJudul}
                    value={this.state.inputBook.judul}
                  />
                </div>
                <div className="col-3 my-3">
                  <input
                    type="text"
                    name="pengarang"
                    className="form-control mx-2"
                    placeholder="Pengarang"
                    onChange={this.handlePengarang}
                    value={this.state.inputBook.pengarang}
                  />
                </div>
                <div className="col-2 my-3">
                  <input
                    type="text"
                    name="harga"
                    className="form-control mx-2"
                    placeholder="Harga"
                    onChange={this.handleHarga}
                    value={this.state.inputBook.harga}
                  />
                </div>
                <div className="col-2 my-3">
                  <input
                    type="number"
                    name="stok"
                    className="form-control mx-2"
                    placeholder="stok"
                    onChange={this.handleStok}
                    value={this.state.inputBook.stok}
                  />
                </div>
                <div className="col-2 my-3">
                  <input
                    type="submit"
                    className="btn btn-primary ml-5"
                    value="Simpan"
                  />
                </div>
              </form>
            </div>
          )}

          <div id="daftarBuku">
            <h2 className="mt-3">Daftar Buku</h2>
            <hr />
            <button className="btn btn-primary m-2" onClick={this.showCreate}>
              Tambah Buku
            </button>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Judul</th>
                  <th>Pengarang</th>
                  <th>Harga</th>
                  <th>Stok</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {this.props.bookList.map((book, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{book.judul}</td>
                    <td>{book.pengarang}</td>
                    <td>{book.harga}</td>
                    <td>{book.stok}</td>
                    <td>
                      <button
                        className="btn btn-info mr-3"
                        onClick={() => this.showEdit(book)}
                      >
                        Edit
                      </button>
                      <button className="btn btn-danger mr-3">Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}
