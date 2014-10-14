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
		
		// ------------- adding Marker ---------------------------
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.7257, -74.0047),
			map: map,
			//------------- Adding a tooltip --------------------
			title: "This is a tooltip."
			//------------- Changing the icon -------------------
			//icon: "https://gmaps-samples.googlecode.com/svn/trunk/markers/blue/blank.png"
		});
		
		//--------------- create an infoWindow -------------------
		var infowindow = new google.maps.InfoWindow({
			content: '<div class="infoWindow">This is an infoWindow</div>'
		});
		
		//assign hte infoWindow to a specific Marked using eventListener
		google.maps.event.addListener(
		marker,
		'click',
		function(){
			//here we open the infoWindow
			infowindow.open(map, marker);
		});
	};
	
})();