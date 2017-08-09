$(document).ready(function() {
	$('#quoteCard').hide();

	$('#quoteAJAX').click(function() {
		$('#quoteCard').fadeIn(1000);

		$.ajax({
		  url: "https://api.forismatic.com/api/1.0/",
		  jsonp: "jsonp",
		  dataType: "jsonp",
		  data: {
		    method: "getQuote",
		    lang: "en",
		    format: "jsonp"
		  }
		})
		.done(update)
		.fail(handleErr);
	});

	function update(response) {
	  $('#log').prepend('<pre>' + $('#response').html() + '</pre>');
	  $('#quoteText').html(JSON.stringify(response.quoteText));
	  $('#quoteAuthor').html(JSON.stringify(response.quoteAuthor));
	  
	  // Para twettear
	  var urlTwitter = 'https://twitter.com/intent/tweet?text=';
	  $('#tweet').attr("href",urlTwitter + $('#quoteText').html() + $('#quoteAuthor').html());
	}

	function handleErr(jqxhr, textStatus, err) {
	  console.log("Request Failed: " + textStatus + ", " + err);
	}
});
