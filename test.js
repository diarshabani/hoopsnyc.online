var settings = {
  "url": "https://api.radar.io/v1/search/autocomplete?query=basketball court&near=40.724860, -73.861384",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "prj_test_pk_c36d6e1bddb9b4a4c1bd0b19d424f1760d1085f4",
  },
};


var latitude = 40.724860;
var longitude = -73.861384;

$.ajax(settings).done(function (response) {
  console.log(response);
  for(diar=0;diar<22;diar++){
    $('#parks').append("<br>");
  }
  $('#parks').append("Searching from: latitude - " + latitude + ", longitude - " + longitude + "<br>" + "Basketball Courts near current location:" + "<br>"+"     ");
  for(var i = 0; i < response.addresses.length; i++){
      $('#parks').append( i+1 +". "+ response.addresses[i].placeLabel + "<br>");
  }
});

  for(diar=0;diar<22;diar++){
    $('#parks').append("<br>");
  }




