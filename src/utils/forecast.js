const request = require('request')

const forecast = (latitude , longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=143a7edb23ee19267fd9f7d97aee04b5&query='+latitude+','+longitude


    request({url , json: true}, (error,{body}) => {

        if(error){
            callback('Unable to connect to weather services', undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else { 
            callback(undefined, body.current.weather_descriptions[0] + ". The is currently " + body.current.temperature + " degrees out. " +"It feels like humidity is "+ body.current.humidity+ "% out there.")

        }
    })
}

module.exports = forecast