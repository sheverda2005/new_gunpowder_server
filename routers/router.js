const { Router } = require("express");
const ProductController = require("../controllers/ProductController")
const router = Router()

router.post("/addProduct", ProductController.addProduct)

router.get("/getAllProducts", ProductController.getAllProducts)

router.get("/getOneProduct", ProductController.getOneProduct)


router.get("/getImage/:imageName", ProductController.getImage)

router.post("/getOrderData", ProductController.getOrderData)

router.post("/feedbackSendMessage", ProductController.feedbackSendMessage)

module.exports = router;

