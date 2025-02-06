const express = require("express");
const {
  getAllProducts,
  getProductById,
  rateProducts,
  rateProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/:id/rate", rateProduct);
module.exports = router;
