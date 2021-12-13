import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27018/db_buku", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Koneksi database gagal..."));

db.once("open", () => {
    console.log("Koneksi database berhasil!");
})