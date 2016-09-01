var Product = require('../models/bevarages.js');

var mongoose = require('mongoose');
mongoose.connect('52.35.107.170:27017/shopping');
var products = [
        new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/102833_2-cadbury-bournvita-health-drink.jpg',
        title:'Cadbury',
        price:200
}),
         new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/266569_4-red-label-tea.jpg',
        title:'Brooke bond',
        price:185
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/186070_1-cothas-coffee-speciality-blend-of-coffee-and-chicory-powder.jpg',
        title:'Cothas',
        price:210
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/100401162_1-coca-cola-coke-diet.jpg',
        title:'Coca cola',
        price:35
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40078473_1-horlicks-health-nutrition-drink-cardia-plus-vanilla.jpg',
        title:'Horlicks',
        price:650
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40082854_1-protinex-nutritional-supplement-lock-seal-diabetes.jpg',
        title:'Protinex',
        price:675
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/100012281_2-red-bull-energy-drink.jpg',
        title:'Red bull',
        price:97
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/20005379_3-pediasure-complete-balanced-premium-chocolate.jpg',
        title:'Pediasure',
        price:500
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/263574_9-tata-tea-life-tulsi-brahmi-cardamom-ginger.jpg',
        title:'Tata',
        price:101
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





