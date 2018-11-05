const express = require('express');
// const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');

// const path = require('path');
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(fileUpload());

app.post('/login',(req,res)=>{
	// console.log(req.body);
	console.log(req.path);
	res.send("Login Information Received.");
});

app.listen(8080)
