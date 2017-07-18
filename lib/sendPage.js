"use strict";

function sendPage(page, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8'"});
    res.write(page);
    res.end();
}
module.exports = sendPage;
