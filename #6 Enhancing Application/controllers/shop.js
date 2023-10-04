const Product = require('../models/product')


exports.getIndex = (req,res,next) =>{
    Product.fetchProducts((products)=>{
        res.render('shop/index',{
            pageTitle: 'Home',
            path: '/',
            prods: products
        })
    })
}

exports.getProducts = (req, res, next)=>{
    Product.fetchProducts((products)=>{
        res.render('shop/product-list',{
            pageTitle: 'Our Products',
            path: '/product-list',
            prods: products
        })
    })
}

exports.getProductDet = (req, res, next)=>{
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect('/');
}

exports.getCart = (req, res, next) =>{
    res.render('shop/cart', {
        pageTitle : 'Your Cart',
        path : '/cart'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/checkout',{
        pageTitle : 'Your orders',
        path : '/checkout'
    })
}