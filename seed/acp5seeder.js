
var Product = require('../models/acp5.js');
var mongoose = require('mongoose');
mongoose.connect('52.32.6.150:27017/shopping');
var products = [
 new Product({
        title:'Pushpak body ',
        price:350
}),
 new Product({
        title:'Pushpak wings  ',
        price:200
}),
new Product({
        title:'Pushpak Ailerons ',
        price:200
}),
new Product({
        title:'Pushpak Flaps ',
        price:150
}),
new Product({
        title:'Pushpak Vertical stabilizer ',
        price:100
}),
new Product({
        title:'Pushpak Horizontal Stabilizer ',
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
