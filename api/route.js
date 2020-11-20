/**
 * Include all dependencies
 */

const AuthController = require('../controllers/AuthController');
const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/generate/temp', (req, res) => {
    return res.json({ temp_secret: AuthController.generateKey().base32 });
});