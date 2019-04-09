const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.get('/', (req, res) => res.send("Server Running"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`This server running with : ${port}`));

const signup = require('./Router/APIs/signup');

const db = require('./config/keys').mongooseURI;
mongoose
    .connect(db,{useNewUrlParser:true})
    .then(() => console.log('DBConnected'))
    .catch(err => console.log(err))
app.use('/APIs/signup', signup);
    
    



