import express from "express";
import { createProduct } from "../services/Create.js";
import { retriveProducts } from "../services/Retrive.js";
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

export default router;
