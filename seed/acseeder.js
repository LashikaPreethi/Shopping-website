var Product = require('../models/ac.js');

var mongoose = require('mongoose');
mongoose.connect('52.38.138.134:27017/shopping');
var products = [
 new Product({
        imagePath: 'http://www.aircraftresourcecenter.com/Gal5/4401-4500/gal4401-MiG-21-Bade/02.jpg',
        title:'MIG 21 ',
        price:900
}),
 new Product({
        imagePath: 'https://ptisidiastima.files.wordpress.com/2014/02/hindustan_hjt-16_kiran_ii_krivchikov_2007.jpg',
        title:'Kiran',
        price:1300
}),
 new Product({
        imagePath: 'http://jetartaviationshop.co.uk/wp-content/uploads/imported/7/RAF-English-Electric-Canberra-B2-Aircraft-Control-Column-Stick-Grip-Yoke-EE-141728148197-4.jpg',
        title:'Canberra',
        price:1300
}),
 new Product({
        imagePath: 'http://www.thehindu.com/multimedia/dynamic/02252/22tvtvAIRSHOWSaran_2252869g.jpg',
        title:'Dhruv',
        price:1350
}),
 new Product({
        imagePath: 'http://timesofindia.indiatimes.com/thumb/msid-49086139,width-400,resizemode-4/49086139.jpg',
        title:'Pushpak',
        price:1150
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

