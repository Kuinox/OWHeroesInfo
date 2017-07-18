"use strict";
//main router

var http = require("http");
var url = require("url");
var index = require("./index.js");
var heroes = require("./heroes.js");
var req_process = function (req, res) {
    console.log("URL received : " + req.url);

    var request = url.parse(req.url, true);
    var pathname = request.pathname;
    var query = request.query;

    try {
        switch (pathname) {
            case "/":
                index(res);
                break;
            default:
                //hereos case
                if(pathname.search("/heroes") === 0) {
                    heroes(req, res, query);
                    break;
                }
                console.log("404"+pathname);
        }
    } catch (e) {
        console.log("Error : " + e.stack);
        console.log("Error : " + e.message);
        //req_erreur(req, res, query);
    }
};

var server = http.createServer(req_process);
var port = 5000;
console.log("Serveur listening on port " + port);
server.listen(port);
