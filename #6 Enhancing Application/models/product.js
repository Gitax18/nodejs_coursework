const path = require('path')
const fs = require('fs')

const pathUtil = require('../utils/path')


module.exports = class Product {
    constructor(title, price, imageURL, description){
        this.title = title;
        this.price = price;
        this.imageURL = imageURL;
        this.description = description;
    }
    
    save(){
        let products = [];
        this.id = Math.random().toString();
        const dataFile =  path.join(pathUtil, 'data', 'products.json');
        fs.readFile(dataFile, (err, fileContent)=>{
            if(!err){
                products = JSON.parse(fileContent);
            } else console.log(err)
            products.push(this)
            fs.writeFile(dataFile, JSON.stringify(products), (err)=>{
                console.log(err)
            })
        })
    }

    static fetchProducts(callback){
        const dataFile =  path.join(path.dirname(require.main.filename), 'data', 'products.json');
        fs.readFile(dataFile, (err,fileContent)=>{
            if (!err){
                 callback(JSON.parse(fileContent))
            } else callback([])
        })
        
    }
}