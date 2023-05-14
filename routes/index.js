const express = require('express');
const router = express.Router();
const User = require('./users');
const Comment = require('./comments');
const Page = require('./page');
const Auth = require('./auth');

//router.use('/')

router.use('/', User);
router.use('/comments', Comment);
router.use('/page', Page);
router.use('/auth', Auth);

router;

module.exports = router;
