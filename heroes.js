"use strict";

var fs = require("fs");
var url = require("url");
var owApiCall = require("./lib/owApiCall.js");
var sendPage = require("./lib/sendPage.js");
var index = require("./index.js");




function process(req, res, query) {
    var template;
    var request = url.parse(req.url, true);
    var pathname = request.pathname;
    var exploded_url = pathname.split("/");
    if (exploded_url.length>2) {
        var data = owApiCall();
        sendPage("fetched", res);
        console.log(data);
    } else {
        template = fs.readFileSync("template/index.html", "utf-8");
        index(res);
    }
}

module.exports = process;
