$(function(){

  
		function getLocation(){
			$.get('http://ipinfo.io', function(location){
				var locationAddress = location.city + ", " + location.region;

		// console.log(location, locationAddress, location.country);
				
				getWeather(location.loc, [locationAddress, location.country]);
			}, 'jsonp')
		}
		getLocation(); // calling geoLocation Method
		
		function getWeather(geoLoc, geoLocName){
			var lat = geoLoc.split(',')[0];
			var log = geoLoc.split(',')[1];
			var appid = '9368eb60f000630cf8566a9abc3d0319';
			var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ log +'&appid=' + appid;

			var ashg = 'http://api.openweathermap.org/data/2.5/weather?lat=37.93334&lon=58.3667&appid=9368eb60f000630cf8566a9abc3d0319';


			$.get(url, function(data){
				var kelvin = data.main.temp;
				var fahrenheit = Math.floor((Math.floor(kelvin) - 273.15) * 1.8000 + 32.00);
				var celsius = Math.floor(Math.floor(kelvin) - 273.15)
				var icon = data.weather[0].icon;
					 
		      $('#icon').append("<img src='http://openweathermap.org/img/w/" + icon + ".png'>");

				display(geoLocName,[fahrenheit,celsius])
			}, 'jsonp');
		}

		function display(loc, temp){

			$('#temperature').append(temp[0] + "F");
			$('#location').append(loc[0]);
			 
		}

	})

/* require jquery, bootstap for format.

<div class="container">

	<div class="row">

		<div class="col-md-10 col-md-offset-1 text-center">
			<div class="details">
			<p id="temperature" class='temperature'><span id='icon'></span></p>
			<p id="location" class='location'></p>
			</div>
		</div>
			
	</div>
  */