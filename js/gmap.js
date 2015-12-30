$(document).ready(function(){
/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Channel Cat @ SB Harbor */
  var latlng = new google.maps.LatLng(34.407825, -119.692576); 

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 16    
  };
  
  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);
};
    
/* end google maps -----------------------------------------------------*/
});
