var Product = require('../models/personal.js');

var mongoose = require('mongoose');
mongoose.connect('52.35.107.170:27017/shopping');
var products = [
        new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/266706_7-dove-cream-beauty-bathing-bar.jpg',
        title:'Dove',
        price:60
}),
         new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/250771_3-pears-pure-gentle-soap-bar.jpg',
        title:'Pears',
        price:54
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/30002410_1-patanjali-kesh-kanti-anti-dandruff-hair-cleanser-shampoo.jpg',
        title:'Patanjali',
        price:110
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40083396_1-lifebuoy-hand-wash-germ-protection-cool-fresh.jpg',
        title:'Lifebuoy',
        price:99
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40082469_1-lux-bathing-soap-charming-magnolia.jpg',
        title:'LUX',
        price:32
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/30006287_1-fem-creme-bleach-gold.jpg',
        title:'Fem',
        price:47
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40082474_1-huggies-ultra-soft-pants-boys-premium-diapers-large.jpg',
        title:'Huggies',
        price:599
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40007165_4-lakme-eyeconic-kajal-black.jpg',
        title:'Lakme',
        price:210
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40002964_4-indulekha-hair-oil-bringha.jpg',
        title:'Indulekha',
        price:367
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

