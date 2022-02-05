//create a new route 
//import express 
const express = require('express');
const router = express.Router();
const showsRouter = require('./shows');


//GET home page 
//any app that has slask / will use the home page 

router.get('/', function (req, res, next) {
    res.render('index', {
        locals: {
            title: 'Movies Express',
            subtext: "this is so cool!"
        },
        partials:{//give key and file to load ; tells it what "chunk" of html; "partial" is the key 
            partial: '/partials/home', 
        }


      
    

    })
})

router.post('/', function (res, req, next) {
    res.send('POST Request FROM HOME PAGE ')
})


module.exports = router;
