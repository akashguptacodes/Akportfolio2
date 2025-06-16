const express = require('express')
const router = express.Router();

const {contactCont} = require('../controllers/contactCont');
router.post('/sendmail',contactCont);

module.exports = router;