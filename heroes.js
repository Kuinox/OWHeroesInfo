"use strict";

var fs = require("fs");
var url = require("url");
var https = require("https");
var index = require("./index.js");

function sendPage(page, res) {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8'"});
    res.write(page);
    res.end();
}

function api_call(resp) { //http://overwatch-api.net/api/v1
    var buffer = "";
    var options = {
        host: "overwatch-api.net",
        port: 443,
        path: "/api/v1/hero",
        method: "GET",
        headers: {
            "User-Agent": "node",
            "Accept" : "application/json"
        },
        json: true
    };
    https.request(options, function(res) {
        res.setEncoding("utf8");
        res.on("data", function (chunk) {
            buffer += chunk;
        });
        res.on("end", function(){
            sendPage(buffer, resp);
        });
    }).end();
}

function process(req, res, query) {
    var template;
    var request = url.parse(req.url, true);
    var pathname = request.pathname;
    var exploded_url = pathname.split("/");
    if (exploded_url.length>2) {
        api_call(res);
    } else {
        template = fs.readFileSync("template/index.html", "utf-8");
        index(res);
    }
}

module.exports = process;
