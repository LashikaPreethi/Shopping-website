var Product = require('../models/acp2.js');

var mongoose = require('mongoose');
mongoose.connect('52.38.138.134:27017/shopping');
var products = [
 new Product({
        title:'Kiran body ',
        price:300
}),
 new Product({
        title:'Kiran wings  ',
        price:200
}),
new Product({
        title:'Kiran Ailerons ',
        price:50
}),
new Product({
        title:'Kiran Flaps ',
        price:50
}),
new Product({
        title:'Kiran Vertical stabilizer ',
        price:150
}),
new Product({
        title:'Kiran Horizontal Stabilizer ',
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
