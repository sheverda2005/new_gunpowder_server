const { Schema, model } = require("mongoose");

    
const military_product = new Schema({
    img: {
        type: String,
        require: true,
        unique: false
    },
    productName: {
        type: String,
        require: true,
        unique: false
    },
    price: {
        type: String,
        require: true,
        unique: false
    },
    productDescription: {
        type: String,
        require: true,
        unique: false
    },
    productLink: {
        type: String,
        require: false, 
        unique: false 
    }
})

module.exports = model("MilitaryProduct", military_product)