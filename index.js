/**
 * Include all dependencies
 */

const express = require("express");
const parser = require("body-parser");


/**
 * Initializing express server instance and include body-parser,
 * then export it as global varable
 */

const app = express();
app.use(parser.json());
module.exports = app;


/**
 * Connection feedback, optional
 */

app.listen(process.env.PORT || 5454, console.log("\nEndpoint Active..."));
app.get('/', (req, res) => res.json({
    message: "2FA API Endpoint",
}));


/**
 * Add any additional api routes from api folder
 */

app.use('/auth', require('./api/route')); // Auth API


/**
 * Automatically send error code 404 for unmatched links
 */

app.use(function(req, res) {
    res.sendStatus(404);
});