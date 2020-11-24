/**
 * Include all dependencies
 */

const AuthController = require('../controllers/AuthController');
const express = require('express');
const router = express.Router();

module.exports = router;


/**
 * Generates specifed secret (including QR codes)
 * 
 * @method {GET}
 */

router.get('/generate/secret/:encoding/:length', (req, res) => {
    let encoding = req.params.encoding;
    let length = parseInt(req.params.length);
    let secret = AuthController.generateSecret(length, encoding);

    return res.json({ secret });
});


/**
 * Verifies token against secret
 * 
 * @method {GET}
 */

 router.post('/verify/token/:encoding', (req, res) => {
    let encoding = req.params.encoding;
    let token = req.body.token;
    let secret = req.body.secret;
    let valid = AuthController.validateToken(secret, token, encoding);
    let remaining = valid ? 30 - Math.floor(new Date().getTime() / 1000.00 % 30) : 0;

    return res.json({ valid, remaining });
});