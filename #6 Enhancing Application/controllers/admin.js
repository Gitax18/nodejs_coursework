const Product = require('../models/product')


exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product', {
        pageTitle: "Add product",
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.postEditProduct = (req,res,next)=>{
    console.table(res.body);
    res.redirect('/admin/edit-product');
}

exports.getEditProduct = (req,res,next)=>{
    Product.fetchProducts(products=>{
        res.render('admin/edit-product',{
            pageTitle: 'Edit Products',
            path: '/admin/edit-product',
            prods: products
        })
    })
}

exports.getProducts = (req,res,next)=>{
    Product.fetchProducts(products=>{
        res.render('admin/products', { 
            prods: products,
            pageTitle: 'Your Products',
            path: '/'
        });
    })
}