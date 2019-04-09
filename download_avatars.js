var request = require('request');
var token = require('./secret').GITHUB_TOKEN;
//console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'Bearer ' + token
    }
};
  request(options, function(err, res, body) {
    cb(err, JSON.parse(body))
  });
}

function downloadImageByURL(url, filePath) {
  var request = require('request');
  var fs = require('fs');

request.get(url)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Content Type ', response.headers['content-type'])
       })
       .pipe(fs.createWriteStream(filePath));
}
// downloadImageByURL('https://avatars0.githubusercontent.com/u/1615?v=4', './images/a.jpg');
// downloadImageByURL(url, path)
getRepoContributors("jquery", "jquery", function(err, result) {
    for (let user of result) {
      console.log(user.login)
      console.log(user.avatar_url)
      downloadImageByURL(user.avatar_url, './images/' + user.login + '.jpg' )
    }

});





