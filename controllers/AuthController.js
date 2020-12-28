/**
 * Include all dependencies
 */

const Speakeasy = require('speakeasy');

module.exports = {
    generateSecret,
    validateToken,
    getTokenFromSecret
};


/**
 * Generates secret for new user
 * 
 * @param {Int} length 
 * @param {String} encoding 
 */

function generateSecret(length = 20, encoding = 'base32') {
    return Speakeasy.generateSecret(length)[encoding];
}


/**
 * Verifies Token against Secret
 * 
 * @param {String} secret 
 * @param {String} token 
 * @param {String} encoding 
 */

function validateToken(secret, token, encoding = 'base32') {
    return Speakeasy.totp.verify({
        secret,
        token,
        encoding,
        window: 6
    });
}


/**
 * Get token from secret
 * 
 * @param {String} secret
 */

function getTokenFromSecret(secret, encoding = 'base32') {
    return Speakeasy.totp({
        secret,
        encoding,
    });
}