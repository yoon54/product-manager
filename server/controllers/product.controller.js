const mongoose = require("mongoose");
const Product = require("../models/product.model");

class ProductController {
    getAll(req, res) {
        Product.find({})
            .then(products => res.json(products))
            .catch(err => res.json(err));
    }
    create(req, res) {
        let newProduct = new Product(req.body);
        newProduct.save()
            .then( () => res.json({msg: "product added"}) )
            .catch( err => res.json(err) );
    }
    getOne(req,res) {
        Product.findOne({_id: req.params._id})
            .then(product => res.json(product))
            .catch(err => res.json(err));
    }
    delete(req, res){
        Product.findByIdAndDelete({_id: req.params._id})
            .then(() => res.json({msg: "Product Deleted"})
            )
            .catch(err => res.json(err));
    }
    edit(req, res){
        Product.findByIdAndUpdate({_id: req.params._id},req.body,{
            runValidators: true
        })
            .then(()=> res.json({msg: "Edit made"}))
            .catch(err => res.json(err));
    }
}


module.exports = new ProductController();