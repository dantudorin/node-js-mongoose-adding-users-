const express = require('express'); 
const router = express.Router();
const formController = require('../controller/form-controller');

router.post('/formPost', formController.registerData);
router.get('/formPage', formController.getFormPage);

module.exports = router;