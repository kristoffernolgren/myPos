angular.module('myPos', []).
run(function(myPos){
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var newLocation = {}
			newLocation.lat = position.coords.latitude;
			newLocation.long = position.coords.longitude;
			myPos.setLocation(newLocation);
			console.log(newLocation);
		});
	}

}).
service('myPos', function($rootScope){
	//default current position
	var myLocation = {}

	
	return{
		getLocation: function(){
			return myLocation;
		},
		setLocation: function(newLocation){
			myLocation = newLocation;
			$rootScope.$broadcast('location', myLocation)
		}
	}
});