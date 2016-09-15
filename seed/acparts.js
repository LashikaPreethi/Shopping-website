var Product = require('../models/acparts.js');

var mongoose = require('mongoose');
mongoose.connect('52.38.138.134:27017/shopping');
var products = [
 new Product({
        title:'Body',
        price:300
}),
 new Product({
        title:'Wings',
        price:200
}),
new Product({
        title:'Ailerons',
        price:50
}),
new Product({
        title:'Flaps',
        price:50
}),
new Product({
        title:'Vertical stabilizer',
        price:150
}),
new Product({
        title:'Horizontal stabilizer',
        price:150
})
];

var done=0;

for(var i=0; i<products.length; i++){
        products[i].save(function(err, result){
        done++;
if(done == products.length){
        exit();
        }
});
}

function exit(){

mongoose.disconnect();

}




