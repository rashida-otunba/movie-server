const express = require('express');
const db = require('../models/db');
const router = express.Router();
//only one slash needed because /shows is declared in app.js
router.get('/', function (req, res, next){
    res.render('index', {
        locals: {
            showData: db,
            path: '/shows', //this will feed into the html list; this is part of the path 
        },
        partials:{
            partial: "/partials/show-list", //index file is what is being rendered and it is being fed the "partials" chuck of info 
        }
  
  })
  })

  
    router.get("/:Title", (req,res) => {
      const {Title} = req.params;
      const show = db.find(f => f.Title === Title);
      console.log(show)
  
      if (show){//if show defined on line 18 is in the database, do the below action: 
          res.render('index', { 
              locals:{
                  showData: show,
              },
  
              partials:{
                  partial: "/partials/show-details",
              }
          },
          )
      } else {
          res.status(404).send(`no show with the handle ${Title}`);
      }
  });
    
    module.exports=router;

