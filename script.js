const option = {
    method: 'GET',
    Headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90ple091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
    };
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));