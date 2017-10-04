var express = require('express');
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3200, function() {
  console.log('Server started');
});
app.use(bodyParser.json());

var data = ["Android", "NodeJS", "ReactJS", "ES6", "PHP"];

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/getNotes', function(req, res) {
  res.send(data);
});

app.post('/add', parser, function(req, res){
	var newNote = req.body.note;
	data.push(newNote);
	res.send(data);
});

app.post('/delete', parser, function(req, res){
	var id = req.body.idDelete;
	data.splice(id, 1);
	res.send(data);
});
//
// app.post('/update', parser, function(req, res){
// 	var id = req.body.idEdit;
// 	data[id] = req.body.contentText;
// 	res.send(data);
// });
