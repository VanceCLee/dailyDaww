// function doggoLoad()
// {
	var myurl= "https://dog.ceo/api/breeds/image/random";
	console.log(myurl);
	$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {
	  console.log(parsed_json);
	  $("#doggoPic").attr("src", parsed_json.message);
	  $("#doggoBreed").html((JSON.stringify(parsed_json["message"]).substring(25, (JSON.stringify(parsed_json["message"])).length - 20)));
	}
	});

