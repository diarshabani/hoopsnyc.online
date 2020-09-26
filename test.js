var settings = {
  "url": "https://api.radar.io/v1/search/autocomplete?query=basketball court&near=40.724860, -73.861384",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "prj_test_pk_c36d6e1bddb9b4a4c1bd0b19d424f1760d1085f4",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
  for(var i = 0; i < response.addresses.length; i++){
  	$('#parks').append(response.addresses[i].placeLabel + "<br>");
  	var park = response.addresses[i].placeLabel;
  	console.log(park);
  }

});

$("button").click(function(){
  $("p").css("color", "red");
});




