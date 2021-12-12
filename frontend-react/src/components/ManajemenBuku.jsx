import React, { Fragment } from "react";

export default class ManajemenBuku extends React.Component {
  render() {
    console.log(this.props.bookList);
    return (
      <Fragment>
        <div className="container mt-3">
          <h1 className="text-center">Manajemen Buku</h1>
          <div id="formTambah"></div>
          <div id="formUbah"></div>
          <div id="daftarBuku"></div>
        </div>
      </Fragment>
    );
  }
}
