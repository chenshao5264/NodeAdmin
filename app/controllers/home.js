var express = require('express'),
  router = express.Router()

// let db = require('../helpers/db');
// db.connectSql("Game")
 // db.updateGoldCurrency(1, 1002, function(result) {
 //    console.log(result);
 // })

// db.selectUser(1, function(result) {
//     console.log(result);
// })

// db.querySql('select * from dbo.GUser where UserName=\'chenshao02\'', function(result) {
//     console.log(result);
// });

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('login', {
      title: '后台管理'
    });
});

router.get('/login', function (req, res, next) {
    res.render('login', {
      title: '后台管理'
    });
});

router.post('/login/submit', function (req, res, next) {
   if (req.body.account === 'admin' && req.body.password === 'admin') {
        res.send("error:0")
   } else {
        res.send("error:1")
   }
});

router.get('/main', function (req, res, next) {
    res.render('main', {
      title: '后台管理'
    });
});