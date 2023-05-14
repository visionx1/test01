const express = require('express');
const router = express.Router();
const User = require('./users');
const Comment = require('./comments');
const Page = require('./page');
const Auth = require('./auth');

//router.use('/')

app.use('/', User);
app.use('/comments', Comment);
app.use('/page', Page);
app.use('/auth', Auth);

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render('sequelize', { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
