import React, { Fragment } from "react";

export default class Beranda extends React.Component {
  // data
  // event handling
  render() {
    return (
      <Fragment>
        <div className="container mt-3 w-75">
          <h1 className="text-center">
            Selamat Datang di toko buku camp404-NIC:C4211116010
          </h1>
          <div id="katalog"></div>
        </div>
      </Fragment>
    );
  }
}
