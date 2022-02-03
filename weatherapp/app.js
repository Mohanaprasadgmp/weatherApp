const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const address = process.argv[2];

if(!address){
    console.log("Please provide some location");    
}
else{
    
    //geocode(address, (error, geocodeData)=>{
    geocode(address, (error, {latitude , longitude, location}={})=>{
        if(error){
            return console.log('Error ', error);
        }

        //forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {        
        forecast(latitude, longitude, (error, forecastData) => {   
            if(error){
                return console.log('Error ', error);
            }

            //console.log(geocodeData.location)
            console.log(location)
            console.log(forecastData)
        })
    })
}




