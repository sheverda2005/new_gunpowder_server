const { Router } = require("express");
const ProductController = require("../controllers/ProductController")
const router = Router()

router.post("/addProduct", ProductController.addProduct)

router.get("/getAllProducts", ProductController.getAllProducts)

router.get("/getImage/:imageName", ProductController.getImage)

router.post("/getOrderData", ProductController.getOrderData)

module.exports = router;

