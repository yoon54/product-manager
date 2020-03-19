const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product needs a title"],
        minlength: [1, "Title has to be longer than 1 letter"]
    },
    price: {
        type: Number,
        required: [true, "Product need a Price"],
        min: [0, "Number must be greater than 0"]
    },
    desc: {
        type: String,
        required: [true, "desc is needed"],
        minlength: [3, "desc needs to be longer than 3 letters"]
    },
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);