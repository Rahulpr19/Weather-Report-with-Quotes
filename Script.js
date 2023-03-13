const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR API KEY',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com' , 
	}
};

const getWeather = (city) =>{

	cityname.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		temp.innerHTML = response.temp
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_degrees
		wind_degrees.innerHTML = response.wind_speed
		humidity.innerHTML = response.humidity
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		feels_like.innerHTML = response.feels_like
		cloud_pct.innerHTML = response.cloud_pct
	})
	.catch(err => console.error(err));


}

// Define an array of quotes with objects that contain the text and author
const quotes = [
	{ text: "The afternoon was cold as blue eyes that didn’t love you any more.",},
	{ text: "Mexican weather report chilli today and hot tamale.",},
	{ text: "Empirical analysis reveals that happiness is negatively related to temperature in a linear model, and is maximized at 13.9 degrees Celsius in a quadratic model.",},
	{ text: "Today has been eighty degrees in the shade. I was clever. I stayed in the sun.",},
	{ text: "It’s so cold in new york city. Today in central park, i saw a squirrel salting his nuts.",},
	{ text: "Rain is one thing the british do better than anybody else.",},
	{ text: "What men call gallantry, and gods adultery, is much more common where the climate’s sultry.",},
	{ text: "I don’t like all this fresh air. i’m from i angeles. i don’t trust any air i can’t see.",},
	{ text: "We may achieve climate, but weather is thrust upon us....",},
	{ text: "I love being in a city with great weather...",},
	{ text: "Conversation about the weather is the last refuge of the unimaginative...",},
	{ text: "If you want to see the sunshine, you have to weather the storm...",},
	{ text: "I have seen many storms in my life...",}


  ];


// Get a random quote from the quotes array
function getRandomQuote() {
	const index = Math.floor(Math.random() * quotes.length);
	return quotes[index];
  }  

document.getElementById("submit").addEventListener("click", (e) =>{
	e.preventDefault()
	getWeather(city.value)

	const quote = getRandomQuote();
		document.getElementById("text").innerHTML = quote.text;

})

getWeather("Delhi");






