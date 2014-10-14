(function(){
	
	window.onload = function(){
	
		//create MapOptions object
		var options = {
			zoom: 12,
			center:  new google.maps.LatLng(40.7257, -74.0047),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		//create the map
		var map = new google.maps.Map(document.getElementById('map'), options);
		
		//adding Marker
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.7257, -74.0047),
			map: map
		});

	
	};
	
})();