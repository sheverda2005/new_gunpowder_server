const Military_Product = require("../models/ProductModel")
const path = require('path')
const fs = require("fs")
const mailService = require("../services/mail_service")
const sendMessageMailService = require("../services/send_message_mail_service")

class ProductController {
    async addProduct(req, res, next) {
        const {img, productName, price, productDescription, productLink} = req.body
        const product = new Military_Product({img, productName, price, productDescription, productLink})
        await product.save()
        res.json(product)
    }

    async getAllProducts(req, res, next) {
      const products = await Military_Product.find()
      res.json(products)
    }

    getImage (req, res) {
      const imageName = req.params.imageName
      fs.readFile(path.join(__dirname, "..", '/images',`/${imageName}`), (err, data) => {
        if (err) {
          res.status(500).send('Помилка сервера');
        } else {
          res.set('Content-Type', 'image/jpeg');
          res.send(data);
        }
      });
  }

  async getAllProducts (req, res, next) {
    try {
        const products = await Military_Product.find()
        res.json(products)
    } catch (e) {
        next(e)
    }
  }

  async getOrderData (req, res, next) {
    console.log(req.body.user, req.body.products)
    await mailService.sendActivationMail("adrefsewer@gmail.com", req.body.user, req.body.products)
  
    res.json({work: "done"})
  }

    async feedbackSendMessage (req, res, next) {
        console.log(req.body)
        await sendMessageMailService.sendActivationMail("adrefsewer@gmail.com", req.body)
        res.json({work: "done"})
    }


}


module.exports = new ProductController()