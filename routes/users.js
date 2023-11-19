var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res) {
  res.render('users');
});


router.post('/', (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  if (email == 'admin@gmail.com' && password == 'admin123') {
    session = req.session
    session.loggedIn = true
    session.userid = req.body.email

    res.render('users')
  } else {
    res.send('Invalid Userid or Password')
  }
})

router.get('/logout', (req,res)=>{
  req.session.destroy()
  res.redirect('/')
  
})



module.exports = router;