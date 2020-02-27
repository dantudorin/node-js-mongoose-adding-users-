const express = require('express');
const router = express.Router();
const pagesController = require('../controller/pages-controller');

router.get('/', pagesController.getDefaultPage);


module.exports = router;