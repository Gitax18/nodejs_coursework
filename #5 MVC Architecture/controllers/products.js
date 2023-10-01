const Product = require('../models/product')


exports.getAddProduct = (req,res,next)=>{
    res.render('add-product', {
        pageTitle: "Add product",
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    res.render('shop', { 
        prods: Product.fetchProducts(),
        pageTitle: 'My Shoppy',
        path: '/'
    });
}