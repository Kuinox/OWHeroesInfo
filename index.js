"use strict";

var fs = require("fs");
function process(res) {
    var template = fs.readFileSync("template/index.html", "utf-8");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(template);
    res.end();
}

module.exports = process;
