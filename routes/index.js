var express = require('express');
var router = express.Router();


var csrf = require('csurf');
var passport= require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

var Product = require('../models/product');
var Pers = require('../models/personal');
var Bev = require('../models/bevarages');
var Cart = require('../models/cart');
var Order = require('../models/order');
var ac= require('../models/ac');
var acparts = require('../models/acparts');
var acp2 = require('../models/acp2');
var acp3= require('../models/acp3');
var acp4= require('../models/acp4');
var acp5= require('../models/acp5');


router.get('/',function(req, res, next){
var successMsg = req.flash('success')[0];
res.render('shop/index', {title: 'Boombasket', successMsg: successMsg, noMessages: !successMsg});

});

router.get('loaderio-fbd01aa2261cff11e16c283826d59af3.txt',function(req, res, next){

res.render('loaderio-fbd01aa2261cff11e16c283826d59af3.txt');

});



/* GET home page. */
router.get('/shop/prod', function(req, res, next) {
  Product.find(function(err,docs){
 var productChunks = [];
 var chunkSize = 3;
 for( var i=0; i < docs.length; i += chunkSize){
productChunks.push(docs.slice(i, i + chunkSize));
}
 res.render('prod/index', { title: 'BoomBasket' ,products: docs });
});
});

router.get('/shop/pers', function(req, res, next) {
  Pers.find(function(err,docs){
 var productChunks = [];
 var chunkSize = 3;
 for( var i=0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
}
 res.render('pers/index', { title: 'BoomBasket' ,products: docs});
});
});



router.get('/shop/bev', function(req, res, next) {
  Bev.find(function(err,docs){
 var productChunks = [];
 var chunkSize = 3;
 for( var i=0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
}
 res.render('bev/index', { title: 'BoomBasket' ,products: docs });
});
});

router.get('/shop/ac', function(req, res, next) {
  ac.find(function(err,docs){
 var productChunks = [];
 var chunkSize = 3;
 for( var i=0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
}
 res.render('ac/index', { title: 'BoomBasket' ,products: docs});
});
});

router.get('/acparts', function(req, res, next) {
acparts.find(function(err,docs){
 var productChunks = [];
 var chunkSize = 3;
 for( var i=0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
}
 res.render('ac/parts', { title: 'BoomBasket' ,products: docs});

 });
});



router.get('/acp2', function(req, res, next) {
acp2.find(function(err,docs){
 var productChunks = [];
 var chunkSize = 3;
 for( var i=0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
}
 res.render('ac/acp2', { title: 'BoomBasket' ,products: docs});

 });
});
router.get('/acp3', function(req, res, next) {
acp3.find(function(err,docs){
 var productChunks = [];
 var chunkSize = 3;
 for( var i=0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
}
 res.render('ac/acp3', { title: 'BoomBasket' ,products: docs});

 });
});
router.get('/acp4', function(req, res, next) {
acp4.find(function(err,docs){
 var productChunks = [];
 var chunkSize = 3;
 for( var i=0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
}
 res.render('ac/acp4', { title: 'BoomBasket' ,products: docs});

 });
});
router.get('/acp5', function(req, res, next) {
acp5.find(function(err,docs){
 var productChunks = [];
 var chunkSize = 3;
 for( var i=0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
}
 res.render('ac/acp5', { title: 'BoomBasket' ,products: docs});

 });
});


router.get('/addtocart/:id',function(req,res,next){
	var productId= req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	
	Product.findById(productId, function(err, product){
	if(err){
		return res.redirect('/');
	}
	cart.add(product, product.id);
	
	//cart.totalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	console.log(cart.totalPrice);
	req.session.cart= cart;
	console.log(req.session.cart);
	console.log("cam to addtocart");
	res.redirect('/shop/prod');
	});
});



router.get('/addtopcart/:id',function(req,res,next){
        var productId= req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Pers.findById(productId, function(err, product){
        if(err){
                return res.redirect('/');
        }
	cart.add(product,product.id);
//	cart.totalPrice=cart.totalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, 'Rs.1,');
         req.session.cart= cart;
        console.log(req.session.cart);
	      res.redirect('/shop/pers' );
        });
});

router.get('/addtobcart/:id',function(req,res,next){
        var productId= req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Bev.findById(productId, function(err, product){
        if(err){
                return res.redirect('/');
        }
        cart.add(product, product.id);
//	cart.totalPrice=cart.totalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, 'Rs.1,');
        req.session.cart= cart;
        console.log(req.session.cart);
        res.redirect('/shop/bev');
        });
});

router.get('/addtoaccart/:id',function(req,res,next){
        var productId= req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        ac.findById(productId, function(err, product){
        if(err){
                return res.redirect('/');
        }
	cart.add(product, product.id);
//	cart.totalPrice=cart.totalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, 'Rs.1,');
        req.session.cart= cart;
        console.log(req.session.cart);
        res.redirect('/shop/ac');
        });
});


router.get('/addtop1cart/:id',function(req,res,next){
        var productId= req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        acparts.findById(productId, function(err, product){
        if(err){
                return res.redirect('/');
        }
	cart.add(product, product.id);
//	cart.totalPrice=cart.totalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, 'Rs.1,');
        req.session.cart= cart;
        console.log(req.session.cart);
        res.redirect('/acparts');
        });
});

router.get('/addtop2cart/:id',function(req,res,next){
        var productId= req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        acp2.findById(productId, function(err, product){
        if(err){
                return res.redirect('/');
        }
	cart.add(product, product.id);
//	cart.totalPrice=cart.totalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, 'Rs.1,');
        req.session.cart= cart;
        console.log(req.session.cart);
        res.redirect('/acp2');
        });
});

router.get('/addtop3cart/:id',function(req,res,next){
        var productId= req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        acp3.findById(productId, function(err, product){
        if(err){
                return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart= cart;
        console.log(req.session.cart);
        res.redirect('/acp3');
        });
});
router.get('/addtop4cart/:id',function(req,res,next){
        var productId= req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        acp4.findById(productId, function(err, product){
        if(err){
                return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart= cart;
        console.log(req.session.cart);
        res.redirect('/acp4');
        });
});
router.get('/addtop5cart/:id',function(req,res,next){
        var productId= req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        acp5.findById(productId, function(err, product){
        if(err){
                return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart= cart;
        console.log(req.session.cart);
        res.redirect('/acp5');
        });
});

router.get('/shoppingcart', function(req, res, next){
	if(!req.session.cart){
		return res.render('shop/shoppingcart',{products: null});
	}
	var cart = new Cart(req.session.cart);	
	res.render('shop/shoppingcart', {products: cart.generateArray(),totalPrice: cart.totalPrice});

});

router.get('/increase/:id',function(req,res,next){
	var productId= req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	cart.increase(productId);
	req.session.cart=cart;
	res.redirect('/shoppingcart');
});

router.get('/checkout',isLoggedIn,function(req,res,next){
	if(!req.session.cart){
	 return res.redirect('/shoppingcart');
	}
	console.log("cart in get");
	var cart= new Cart(req.session.cart);
	var errMsg = req.flash('error')[0];
	res.render('shop/checkout',{csrfToken: req.csrfToken(),total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});	


});

router.post('/checkout',isLoggedIn,function(req,res,next){

	 if(!req.session.cart){
         return res.redirect('/shoppingcart');
        }
 
     var cart = new Cart(req.session.cart);
	var order= new Order({
	user: req.user,
	cart: cart,
	name: req.body.name,
	address: req.body.address
});
	req.session.cart=cart;
	 console.log(req.session.cart);
	order.save(function(err,result){
	 req.flash('success', 'Successfully bought');
	req.session.order=order;
	 console.log(req.session.order);
        req.session.cart=null;
        res.redirect('/');
});
// console.log(res.session.order);

});

router.get('',function(req,res,next){
        res.render('shop/index',{ title: 'BoomBasket' });
});

function isLoggedIn(req,res, next){
        if(req.isAuthenticated()){
                return next();
        }
	req.session.oldUrl= req.url;
        res.redirect('/user/signin');
}


module.exports = router;
