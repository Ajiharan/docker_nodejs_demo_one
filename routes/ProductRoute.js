import express from "express";
import { createProduct } from "../services/Create.js";
import { retriveProducts } from "../services/Retrive.js";
import { deleteProduct } from "../services/Delete.js";
import { updateProduct } from "../services/Update.js";
const router = express.Router();

router.post("/insert", async (req, res) => {
  try {
    const { productName, price, count } = req.body;
    await createProduct(productName, price, count);
    return res.status(200).json({ message: "sucessfully Inserted" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err?.reason?.sqlMessage || "server error" });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const result = await retriveProducts();

    res.status(200).json(result?.data);
  } catch (err) {
    res.status(500).json({ message: err?.reason?.sqlMessage });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await deleteProduct(id);
    res.status(200).json("sucessfully deleted");
  } catch (err) {
    if (err?.status === 400) {
      return res.status(400).json({ message: err?.reason });
    }
    res.status(500).json({ message: err?.reason?.sqlMessage });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { productName, price, count } = req.body;
    await updateProduct(id, productName, price, count);
    res.status(200).json("sucessfully updated");
  } catch (err) {
    if (err?.status === 400) {
      return res.status(400).json({ message: err?.reason });
    }
    res.status(500).json({ message: err?.reason?.sqlMessage });
  }
});

export default router;
