var fs = require("fs");
var index = fs.readFileSync("./index.html");
var makeRequest = require("request");

function handler(request, response) {
  var url = request.url;
  console.log("url", url);
  if (url === "/") {
    response.end(index);
  }
  else if(url === "/auth") {
    getBody(request, function (passwordBody) {
      // console.log(JSON.parse(passwordBody));
      var auth = "Basic " +
        new Buffer(passwordBody.username + ":" + passwordBody.password)
        .toString("base64");
      makeRequest.get({
        url: "https://api.github.com/users/",
        headers: {
          "Authorization": auth,
          "User-Agent": "Joshua-Ronan-Phillips"
        }
      }, function (error, response, body) {
        console.log("after auth bod-ay", body);
      });
    });
  }
}

function gitHubRequest(username, password, callback) {

}

function getBody(request,callback) {
  body = "";
  request.on('data', function (chunk) {
    body += chunk;
  });
  request.on('end', function (chunk) {
    callback(body);
  });
}

module.exports = handler;
