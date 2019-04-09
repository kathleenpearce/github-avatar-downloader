var request = require('request');
var token = require('./secret').GITHUB_TOKEN;
console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'Bearer ' + token
    }
};
  request(options, function(err, res, body) {
      for (user in JSON.parse(body)) {
        cb(err, JSON.parse(body)[user].avatar_url);
      };
  });
}

function downloadImageByURL(url, filePath) {

}

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log(result);

});





