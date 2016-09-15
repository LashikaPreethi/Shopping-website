var Product = require('../models/product.js');

var mongoose = require('mongoose');
mongoose.connect('52.38.138.134:27017/shopping');
var products = [
	new Product({
	imagePath: 'http://www.bigbasket.com/media/uploads/p/l/290394_5-domex-original-toilet-cleaner-expert.jpg',
	title:'Domex',
	price:113
}),
	 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40002072_2-rin-detergent-bar.jpg',
        title:'Rin',
        price:15
}),
   	 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/100006809_5-vim-dishwash-bar.jpg',
        title:'Vim',
        price:10
}),
 new Product({
	imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40008475_4-scotch-brite-scrub-pad-regular-super-saver.jpg',
        title:'Scotch Brite',
        price:34
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40082572_1-ndura-tawa-induction-bottom.jpg',
        title:'Ndura',
        price:486
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40082588_1-ndura-cookware-set.jpg',
        title:'Ndura',
        price:1399
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40082591_1-ndura-gas-stove-cute.jpg',
        title:'Ndura',
        price:2120
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40082613_1-ndura-wet-grinder-fabio.jpg',
        title:'Ndura',
        price:4196
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40082722_1-good-knight-advanced-activ-cartridge-neem.jpg',
        title:'Good Knight',
        price:69
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/299474_2-wheel-green-lemon-jasmine-detergent-powder.jpg',
        title:'Wheel',
        price:24
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/269256_2-pril-dishwash-liquid-lime-green.jpg',
        title:'Pril',
        price:105
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/290383_16-surf-excel-matic-front-load-detergent-powder.jpg',
        title:'Surf Excel',
        price:120
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40082612_1-ndura-wet-grinder-magic.jpg',
        title:'Ndura',
        price:3791
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40083431_1-preethi-mixer-grinder-juicer-zodiac-black.jpg',
        title:'Preethi',
        price:8960
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40083426_1-preethi-mixer-grinder-steel-max-steel-black.jpg',
        title:'Preethi',
        price:6665
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
