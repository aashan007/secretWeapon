const express = require('express');
const router = express.Router();

router.get("/",function(req,res)	{
	res.render("index");
});

router.get("/login",function(req,res)	{
	res.render("login");
});

router.post('/login_auth',function(req,res){
	console.log("In login_auth");
	var username = req.body.username;
	var password = req.body.password;
	console.log(username);
	console.log(password);
	if (username == global.username && password == global.password)	{
		console.log("You are authentic");
		global.access = true;
	}
	 res.redirect('/dashboard');
});

module.exports = router;
