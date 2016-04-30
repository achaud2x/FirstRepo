var express = require('express');

var app = express();
var port = process.env.npm_package_config_port || 3000;

app.get('/',function(req,res){
  res.end('Hello World in node\n');
});

app.get('/abhi/:name/:age',function(req,res){
  res.write('My name is '+req.params.name);
  res.write('\nMy age is '+req.params.age);
  res.end('\nTHANK YOU\n');
});

app.get('/area',function(req,res){
  res.end('Hello I am from Chandigarh\n');
});

app.listen(port,function(){
  console.log('Listening to the port '+port);
})
