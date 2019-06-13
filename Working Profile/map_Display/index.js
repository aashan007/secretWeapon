const express=require('express');
const app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/',(req,res)=>{
    res.send('Hello World');
});


app.get('/api/location',(req,res)=>{
    var num1=Math.floor(Math.random()*(361+1)-180);
    var num2=Math.floor(Math.random()*(361+1)-180);

    var data={
        lat:num1+Math.round(Math.random()*10000)/10000,
        long:num2+Math.round(Math.random()*10000)/10000
    };
    res.send(data);
});







app.listen(3000);