var config1 = {
  "id": '616418121193107456',
  "domId": 'mytweets',
  "maxTweets": 2,
  "enableLinks": true
};

function displayTweets() {
	twitterFetcher.fetch(config1);
}

$(document).ready(displayTweets());