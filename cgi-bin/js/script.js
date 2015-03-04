function initialize() {

	var mapOptions = {
		center: { lat: -45.397, lng: 87.644},
		zoom: 8
	};
	var map = new google.maps.Map(document.getElementById('Map'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

