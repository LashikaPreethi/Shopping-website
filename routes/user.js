var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport= require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

var Order = require('../models/order');

router.get('/profile', isLoggedIn,  function(req,res,next){
	 var order = new Order(req.session.order);
        res.render('user/profile',{csrfToken: req.csrfToken(),name: order.name, address: order.address, items: order.cart.items.item, totalQty: order.cart.totalQty, totalPrice: order.cart.totalPrice});
});

router.get('/logout',isLoggedIn,  function(req,res,next){
	req.logout();
	res.redirect('/');
});

router.use('/', notLoggedIn, function(req,res,next){
	next();
});

router.get('/signup',function(req, res, next){
        var messages = req.flash('error');
        res.render('user/signup',{csrfToken: req.csrfToken(),messages:messages,hasErrors: messages.length > 0});
});

router.post('/signup',passport.authenticate('local.signup',{
        failureRedirect: '/user/signup',
        failureFlash: true
}), function(req,res,next){
        if(req.session.oldUrl){
                res.redirect(req.session.oldUrl);
                req.session.oldUrl= null;
}
        else{
        res.redirect('/user/profile');
}
});

router.get('/signin',function(req, res, next){
        var messages = req.flash('error');
        console.log("signin get");
        res.render('user/signin',{csrfToken: req.csrfToken(),messages: messages,hasErrors: messages.length > 0});
});

router.post('/signin',passport.authenticate('local.signin',{

        failureRedirect: '/user/signin',
        failureFlash: true
}), function(req,res,next){
	if(req.session.oldUrl){
		res.redirect(req.session.oldUrl);
		req.session.oldUrl= null;
}
	else{
	res.redirect('/user/profile');
}
});





module.exports = router;

function isLoggedIn(req,res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
}

function notLoggedIn(req,res, next){
        if(!req.isAuthenticated()){
                return next();
        }
        res.redirect('/');
}

