// modified from https://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps/
var map = L.map( 'map', {
  center: [46.8, -92.1],
  minZoom: 2,
  zoom: 11
});
 
L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 subdomains: ['a','b','c']
}).addTo( map );
 
//var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );
 
var myIcon = L.icon({
  //iconUrl: myURL + 'images/pin24.png',
  //iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();
var smallgroups = CCB.PublicGroupList.data
for ( var i = 0; i < smallgroups.length; ++i )
{
  var popup = smallgroups[i].smallgroups;
  // capture null lat-longs
  if (smallgroups[i].meet_at_latitude === null) {
    smallgroups[i].meet_at_latitude = 46.822197;
    smallgroups[i].meet_at_longitude = -92.104697;
  }
 
  var m = L.marker( [smallgroups[i].meet_at_latitude, smallgroups[i].meet_at_longitude]) //, {icon: myIcon} )
                  .bindPopup( popup );
 
  markerClusters.addLayer( m );
}
 
map.addLayer( markerClusters );