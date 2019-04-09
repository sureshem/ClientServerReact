const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');

//Get method
Router.get('/test', (req, res) => res.json({Msg:"Signup works"}));
const Newuser = require('../../models/Register');

//Post method
Router.post('/register', (req, res) => {
    Newuser.findOne({email:req.body.email})
        .then(user => {
            if(user){
               return res.status(400).json({email:"This Email Already Exists"})
            }else {
                const NewuserData = new register ({
                    username:req.body.username,
                    email:req.body.email,
                    password:req.body.password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(NewuserData.password, salt, (err, hash) => {
                        if(err) throw err;
                        NewuserData.password = hash;
                        NewuserData
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                    });
                });
            }
        })
})

module.exports = Router;