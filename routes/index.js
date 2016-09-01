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

router.get('/',function(req, res, next){
var successMsg = req.flash('success')[0];
res.render('shop/index', {title: 'Boombasket', successMsg: successMsg, noMessages: !successMsg});

});

router.get('loaderio-fbd01aa2261cff11e16c283826d59af3.txt',function(req, res, next){

res.render('loaderio-fbd01aa2261cff11e16c283826d59af3.txt');

});

router.get('/ss',function(req,res){
console.log("search ");

var item_template='';
var query=document.getElementById('query').value;
var hostname=window.location.hostname;
$.getJSON("http://"+hostname+":9200/shopping/_search?q=Name:"+query,function(results){
console.log(results);
document.getElementById('heading').innerHTML=results.hits.total+" items found";
if(results.hits.total>0){
 var items =results.hits.hits;
 for(var i in items){
 var cat=items[i]._type;
 var prodId=`${cat}_${items[i]._source.Name}_${items[i]._source.Quantity}`;
  item_template += `<div class="col-md-4"  id="${cat}_${items[i].Name}_${items[i].Quantity}">  <h2>${items[i]._source.Name}</h2>
                                        <a href="javascript:addtocart('{$i}')" > <img height="150px" width="150px" src="./img/${cat}/${items[i]._source.Name}.jpg" /></$
                                        <p> ${items[i]._source.Price}<p>
                                        <p>(${items[i]._source.Quantity})<p>
                                         <button id="${items[i]._source.id}" class="btn btn-success" onclick="add('${items[i]._source.id}')" value="Add to cart" >Add t$
                                        </div>`

}
document.getElementById('list').innerHTML=item_template;


}
else
document.getElementById('list').innerHTML='';
});

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
 res.render('pers/index', { title: 'BoomBasket' ,products: docs });
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


router.get('/plusaddtocart/:id',function(req,res,next){
        var productId= req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Product.findById(productId, function(err, product){
        if(err){
                return res.redirect('/');
        }
        cart.plus(product, product.id);
        req.session.cart= cart;
        res.redirect('/shop/checkout');
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
	req.session.cart= cart;
	console.log(req.session.cart);
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
        cart.add(product, product.id);
        req.session.cart= cart;
        console.log(req.session.cart);
        res.redirect('/shop/pers');
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
        req.session.cart= cart;
        console.log(req.session.cart);
        res.redirect('/shop/bev');
        });
});


router.get('/shoppingcart', function(req, res, next){
	if(!req.session.cart){
		return res.render('shop/shoppingcart',{products: null});
	}
	var cart = new Cart(req.session.cart);	
	res.render('shop/shoppingcart', {products: cart.generateArray(),totalPrice: cart.totalPrice});

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
