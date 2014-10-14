(function(){
	
	window.onload = function(){
	
		//create MapOptions object
		var options = {
			zoom: 3,
			center:  new google.maps.LatLng(37.09, -95.71),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		//create the map
		var map = new google.maps.Map(document.getElementById('map'), options);
		
		//adding click events to the buttons
		
		//getting values
		document.getElementById('getValues').onclick = function(){
			alert('Current Zoom level is ' + map.getZoom());
			alert('Current center is ' + map.getCenter());
			alert('Current MapType is ' + map.getMapTypeId());
		}
		
		//changing values
		document.getElementById('changeValues').onclick = function(){
			map.setOptions(
			{
				center: new google.maps.LatLng(40.6891, -74.0445),
				zoom: 17,
				mapTypeId: google.maps.MapTypeId.SATELLITE
			}
			);
		}
	
	};
	
})();