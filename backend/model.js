import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    pengarang: { type: String, required: true },
    judul: { type: String, required: true },
    harga: { type: Number, required: true },
    stok: { type: Number, required: true },
  },
  {
    collection: "koleksiBuku",
  }
);

const Book = mongoose.model("BukuModel", BookSchema);

export { Book };