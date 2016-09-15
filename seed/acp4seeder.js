
var Product = require('../models/acp4.js');
var mongoose = require('mongoose');
mongoose.connect('52.32.6.150:27017/shopping');
var products = [
 new Product({
        title:'Dhruv body ',
        price:400
}),
 new Product({
        title:'Dhruv Main rotor blade  ',
        price:300
}),
new Product({
        title:'Dhruv Tail rotor ',
        price:200
}),
new Product({
        title:'Dhruv Rotor mast ',
        price:150
}),
new Product({
        title:'Dhruv Cockpit ',
        price:100
}),
new Product({
        title:'Dhruv Landing skids ',
        price:100
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
