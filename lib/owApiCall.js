var https = require("https");

function owApiCall(path) { //http://overwatch-api.net/api/v1
    var buffer = "";
    var options = {
        host: "overwatch-api.net",
        port: 443,
        path: path,
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
    }).end();
    return buffer;
}

module.exports = owApiCall;
