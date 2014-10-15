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
		
		//created the bounds
		var bounds = new google.maps.LatLngBounds();
		
		//create an array that will contains the coordinates
		//for New York, San Francisco and Seattle
		var places = [];
		
		places.push(new google.maps.LatLng(40.756, -73.986)); //NewYork
		places.push(new google.maps.LatLng(37.775, -122.419)); //San Francisco
		places.push(new google.maps.LatLng(47.620, -122.347)); //Seattle
		places.push(new google.maps.LatLng(37.87, 13.6588)); //Seattle

		
		//we only need one infoWindow, so we declare it here
		var infowindow;
		
		//Let's go through the array and extract the data
		for (var i=0; i<places.length; i++){
		
			//create a new Marker
			var marker = new google.maps.Marker({
				position: places[i],
				map: map,
				title: 'Place number ' + i
			});
			
			//Wrapping the event listener inside an anonymous function
			//that we immetially invoke and passes the variable i to
			(function(i, marker){
				
				//create the event listener
				google.maps.event.addListener(
					marker,
					'click',
					function(){
						
						if (!infowindow){
							infowindow = new google.maps.InfoWindow();
						}
						
						infowindow.setContent('<div class=\"infoWindow\">Place number '+i+'</div>');
						
						
						//open the infoWindow
						infowindow.open(map, marker);
					}
				);
				
			})(i, marker);
			
			//we extends the bounds -- Within the for loop
			bounds.extend(places[i]);
		
		}
		
		//adjust the map to the new bounding
		map.fitBounds(bounds);
		
	
	}
	
})();