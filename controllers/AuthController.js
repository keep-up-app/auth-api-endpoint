/**
 * Include all dependencies
 */

const Speakeasy = require('speakeasy');

module.exports = {
    generateKey
};


function generateKey() {
    return Speakeasy.generateSecret();
}