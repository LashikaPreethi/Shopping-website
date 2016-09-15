var Product = require('../models/bevarages.js');

var mongoose = require('mongoose');
mongoose.connect('52.38.138.134:27017/shopping');
var products = [
   new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/281167_1-gino-toschi-vinegar-white-wine.jpg',
        title:'Wine',
        price:220
}),
   	 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/70001123_1-badia-wine-vinegar-merlot-sweet.jpg',
        title:'Wine',
        price:565
}),
 new Product({
	imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40003572_2-colavita-vinegar-red-wine-product-of-italy.jpg',
        title:'Wine',
        price:290
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40070741_1-tropicana-delight-fruit-juice-mixed-fruit.jpg',
        title:'Tropicana',
        price:18
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/265688_3-tropicana-delight-fruit-juice-litchi.jpg',
        title:'Tropicana',
        price:18
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/305792_5-protinex-high-protein-nutritional-supplement-vanilla-flavor.jpg',
        title:'Protinex',
        price:450
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/290192_8-bru-gold-instant-coffee.jpg',
        title:'Bru',
        price:99
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/274037_1-appy-apple-juice-drink-classic.jpg',
        title:'Appy',
        price:10
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/119401_9-horlicks-junior-health-nutrition-drink-original-flavor-stage-2-4-6-years.jpg',
        title:'Horlicks',
        price:255
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/251014_2-thums-up-soft-drink.jpg',
        title:'Coca cola',
        price:38
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/103246_2-aquafina-packaged-drinking-water.jpg',
        title:'Aquafina',
        price:33
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/281594_4-3-roses-tea-natural-care.jpg',
        title:'3 roses',
        price:143
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/267400_2-nescafe-coffee-classic.jpg',
        title:'Nescafe',
        price:120
}),
new Product({
    imagePath: 'http://www.bigbasket.com/media/uploads/p/l/257034_5-hersheys-syrup-chocolate.jpg',
        title:'Hersheys',
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





