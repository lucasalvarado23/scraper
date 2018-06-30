var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {

	request("http://www.nytimes.com", function (err, res, body){

		var $ = cheerio.load(body);

		var articles = [];

		$(".theme-summary").each(function(i, element){

			var head = $(this).children(".story-heading").text().trim();
			var sum = $(this).children(".summary").text().trim();
			if(!sum) sum = "No summary available"
			if(head && sum) {
				var headNeat = head.trim();
				var sumNeat = sum.trim();

				var dataToAdd = {
					headline: headNeat,
					summary: sumNeat
				};
				articles.push(dataToAdd);
			}
		});
		console.log( "articles", articles);
		cb(articles);
	});
};

module.exports = scrape;