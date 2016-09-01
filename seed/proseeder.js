var Product = require('../models/product.js');

var mongoose = require('mongoose');
mongoose.connect('52.35.107.170:27017/shopping');
var products = [
	new Product({
	imagePath: 'http://www.bigbasket.com/media/uploads/p/l/228623_16-surf-excel-matic-front-load-detergent-powder.jpg',
	title:'SurfExcel',
	price:235
}),
	 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40018395_3-ariel-detergent-powder-matic-top-front-load.jpg',
        title:'Ariel',
        price:372
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/266969_4-vim-dishwash-bar.jpg',
        title:'Vim',
        price:48
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/263753_4-lizol-disinfectant-floor-cleaner-citrus.jpg',
        title:'Lizol',
        price:137
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/268761_1-odonil-air-freshener-assorted.jpg',
        title:'Odonil',
        price:120
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/285250_6-comfort-after-wash-99-anti-bacterial-fabric-conditioner-bottle.jpg',
        title:'Comfort',
        price:53 
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40083430_2-preethi-kettle-aromour.jpg',
        title:'Preethi',
        price:1679 
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/100134172_1-pril-dishwash-liquid-lime.jpg',
        title:'Pril',
        price:155 
}),
 new Product({
        imagePath: 'http://www.bigbasket.com/media/uploads/p/l/40019212_4-tide-naturals-lemon-chandan.jpg',
        title:'Tide',
        price:60 
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
