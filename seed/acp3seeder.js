var Product = require('../models/acp3.js');
var mongoose = require('mongoose');
mongoose.connect('52.32.6.150:27017/shopping');
var products = [
 new Product({
        title:'Canberra body ',
        price:500
}),
 new Product({
        title:'Canberra wings  ',
        price:300
}),
new Product({
        title:'Canberra Ailerons ',
        price:50
}),
new Product({
        title:'Canberra Flaps ',
        price:50
}),
new Product({
        title:'Canberra Vertical stabilizer ',
        price:250
}),
new Product({
        title:'Canberra Horizontal Stabilizer ',
        price:150
})
];
var done=0;
for(var i=0; i<products.length; i++){
        products[i].save(function(err, result){
        done++;
if(done == products.length){
        exit();
        }});
}
function exit(){
mongoose.disconnect();
}
