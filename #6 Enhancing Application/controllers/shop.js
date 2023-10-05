const Product = require('../models/product')
const Cart = require('../models/cart')


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
    Product.findProduct(prodId, product => {
        console.log(product)
        res.render('shop/product-detail',{
            pageTitle: product.title,
            path: '/product-list',
            product:product
        });
    })
}

exports.getCart = (req, res, next) =>{
    res.render('shop/cart', {
        pageTitle : 'Your Cart',
        path : '/cart'
    })
}

exports.postCart = (req, res, next) =>{
    const id = req.body.productID;
    Product.findProduct(id, product=>{
        Cart.addProduct(id, product.price);
    });

    res.render('shop/cart', {
        pageTitle : 'Your Cart',
        path : '/cart'
    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/checkout',{
        pageTitle : 'Your orders',
        path : '/checkout'
    })
}