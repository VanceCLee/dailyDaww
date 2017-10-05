$("#doggoPic1").bind("load", function () { $(this).fadeIn(400,swing); });
$("#doggoPic2").bind("load", function () { $(this).fadeIn(600,swing); });
$("#doggoPic3").bind("load", function () { $(this).fadeIn(800,swing); });
$("#doggoPic4").bind("load", function () { $(this).fadeIn(1000,swing); });
$("#doggoPic5").bind("load", function () { $(this).fadeIn(1200,swing); });

$("#doggoPic6").bind("load", function () { $(this).fadeIn(600,swing); });
$("#doggoPic7").bind("load", function () { $(this).fadeIn(800,swing); });
$("#doggoPic8").bind("load", function () { $(this).fadeIn(1000,swing); });
$("#doggoPic9").bind("load", function () { $(this).fadeIn(1200,swing); });
$("#doggoPic10").bind("load", function () { $(this).fadeIn(1000,swing); });

$("#doggoPic11").bind("load", function () { $(this).fadeIn(800,swing); });
$("#doggoPic12").bind("load", function () { $(this).fadeIn(1000,swing); });
$("#doggoPic13").bind("load", function () { $(this).fadeIn(1200,swing,function(){bark()}); });
$("#doggoPic14").bind("load", function () { $(this).fadeIn(1000,swing); });
$("#doggoPic15").bind("load", function () { $(this).fadeIn(800,swing); });

$("#doggoPic16").bind("load", function () { $(this).fadeIn(1000,swing); });
$("#doggoPic17").bind("load", function () { $(this).fadeIn(1200,swing); });
$("#doggoPic18").bind("load", function () { $(this).fadeIn(1000,swing); });
$("#doggoPic19").bind("load", function () { $(this).fadeIn(800,swing); });
$("#doggoPic20").bind("load", function () { $(this).fadeIn(600,swing); });

$("#doggoPic21").bind("load", function () { $(this).fadeIn(1200,swing); });
$("#doggoPic22").bind("load", function () { $(this).fadeIn(1000,swing); });
$("#doggoPic23").bind("load", function () { $(this).fadeIn(800,swing); });
$("#doggoPic24").bind("load", function () { $(this).fadeIn(600,swing); });
$("#doggoPic25").bind("load", function () { $(this).fadeIn(400,swing); });

function bark() {
	var x = document.getElementById("barkSong");
	x.play();
}

var myurl= "https://dog.ceo/api/breeds/image/random";

//doggoPic1
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic1").attr("src", parsed_json.message);
	}
});
//doggoPic2
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic2").attr("src", parsed_json.message);
	}
});
//doggoPic3
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic3").attr("src", parsed_json.message);
	}
});
//doggoPic4
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic4").attr("src", parsed_json.message);
	}
});
//doggoPic5
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic5").attr("src", parsed_json.message);
	}
});

//doggoPic6
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic6").attr("src", parsed_json.message);
	}
});
//doggoPic7
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic7").attr("src", parsed_json.message);
	}
});
//doggoPic8
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic8").attr("src", parsed_json.message);
	}
});
//doggoPic9
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic9").attr("src", parsed_json.message);
	}
});
//doggoPic10
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic10").attr("src", parsed_json.message);
	}
});

//doggoPic11
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic11").attr("src", parsed_json.message);
	}
});
//doggoPic12
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic12").attr("src", parsed_json.message);
	}
});
//doggoPic13
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic13").attr("src", parsed_json.message);
	}
});
//doggoPic14
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic14").attr("src", parsed_json.message);
	}
});
//doggoPic15
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic15").attr("src", parsed_json.message);
	}
});

//doggoPic16
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic16").attr("src", parsed_json.message);
	}
});
//doggoPic17
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic17").attr("src", parsed_json.message);
	}
});
//doggoPic18
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic18").attr("src", parsed_json.message);
	}
});
//doggoPic19
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic19").attr("src", parsed_json.message);
	}
});
//doggoPic20
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic20").attr("src", parsed_json.message);
	}
});

//doggoPic21
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic21").attr("src", parsed_json.message);
	}
});
//doggoPic22
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic22").attr("src", parsed_json.message);
	}
});
//doggoPic23
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic23").attr("src", parsed_json.message);
	}
});
//doggoPic24
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic24").attr("src", parsed_json.message);
	}
});
//doggoPic25
$.ajax({
	url : myurl,
	crossDomain: true,
	dataType : "json",
	success : function(parsed_json) {

	  $("#doggoPic25").attr("src", parsed_json.message);
	}
});