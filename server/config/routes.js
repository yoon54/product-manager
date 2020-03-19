const Products = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/Products", Products.getAll);
    app.post("/api/Products",Products.create);
    app.get("/api/Products/:_id",Products.getOne);
    app.delete("/api/Products/:_id", Products.delete);
    app.put("/api/Products/edit/:_id", Products.edit);
}