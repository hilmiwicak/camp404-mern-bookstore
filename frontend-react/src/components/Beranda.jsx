import React, { Fragment } from "react";

export default class Beranda extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container mt-3 w-75">
          <h1 className="text-center">
            Selamat Datang di toko buku camp404-NIC:C4211116010
          </h1>
          <div id="katalog" className="mt-5">
            <h2>Katalog Buku</h2>
            <hr />
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Judul</th>
                  <th>Pengarang</th>
                  <th>Harga</th>
                  <th>Stok</th>
                </tr>
              </thead>
              <tbody>
                {this.props.bookList.map((book, index) => (
                  <tr key={book._id}>
                    <td>{index + 1}</td>
                    <td>{book.judul}</td>
                    <td>{book.pengarang}</td>
                    <td>{book.harga}</td>
                    <td>{book.stok}</td>
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
