var Product = require('../models/personal.js');

var mongoose = require('mongoose');
mongoose.connect('52.38.138.134:27017/shopping');
var products = [
   new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40081424_1-bio-oil-specialist-skin-care-oil.jpg',
        title:'Bio-Oil',
        price:700
}),
   	 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/20004217_3-parachute-coconut-oil-100-pure.jpg',
        title:'Parachute',
        price:30
}),
 new Product({
	imagePath: 'http://www.bigbasket.com/media/uploads/p/l/265771_2-colgate-toothpaste-maxfresh-blue-peppermint-ice-gel.jpg',
        title:'Colgate',
        price:90
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/100108978_4-pepsodent-germicheck-toothpaste.jpg',
        title:'Pepsodent',
        price:121
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40079530_1-jovees-face-wash-de-tan.jpg',
        title:'Jovees',
        price:175
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/266839_12-vaseline-intensive-care-aloe-soothe-body-lotion.jpg',
        title:'Vaseline',
        price:188
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/20004176_4-neutrogena-oil-free-moisture-combination-skin.jpg',
        title:'NEUTROGENA',
        price:296
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40034580_6-dettol-handwash-original.jpg',
        title:'Dettol',
        price:94
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/100134697_10-himalaya-face-wash-purifying-neem.jpg',
        title:'Himalaya',
        price:130
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40077801_1-banjaras-facial-kit-papaya-blister.jpg',
        title:'Banjaras',
        price:200
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40082478_1-lakme-complexion-care-color-transform-bronze.jpg',
        title:'Lakme',
        price:325
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40077758_1-fair-lovely-powder-face-cream.jpg',
        title:'Fair and lovely',
        price:55
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40008462_1-meera-shampoo-hair-fall-care.jpg',
        title:'Meera',
        price:110
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/263113_1-nivea-nourishing-body-milk-almond-oil-very-dry-skin.jpg',
        title:'Nivea',
        price:200
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

