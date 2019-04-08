var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');




function getRepoContributors(repoOwner, repoName, cb) {


  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors"
    headers: {
      'User Agent': 'request',
      'Authorization': 'Bearer' df0fa291d1937632e9f8db23a4cc963a18b36838
    }


  request(options, function(err, res, body) {
    cb(err, body);
  });






getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});