import { Router } from "express";
import { Book } from "./model.js";

const router = Router();

router.route("/").get((req, res) => {
  Book.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error.message));
});

router.route("/delete/:id").delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Buku dihapus."))
    .catch((error) => res.status(400).json(error.message));
});

router.route("/update/:id").put((req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedBook) => res.status(200).json(updatedBook))
    .catch((error) => res.status(400).json(error.message));
});

router.route("/add").post((req, res) => {
  Book.create(req.body)
    .then((createdBook) => res.status(200).json(createdBook))
    .catch((error) => res.status(400).json(error.message));
});

export { router };