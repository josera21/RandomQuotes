$(document).ready(function() {
	$('#quoteAJAX').click(function() {
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
	}

	function handleErr(jqxhr, textStatus, err) {
	  console.log("Request Failed: " + textStatus + ", " + err);
	}
});
