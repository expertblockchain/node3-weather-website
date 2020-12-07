const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f5f00e8d2162948f53b6e939416f3f13&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json:true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather-service.', undefined)
        } else if(body.success === false) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ': It is currently ' + body.current.temperature + ' degrees (C) in ' + body.location.name + '. It feels like ' + body.current.feelslike + ' degrees (C) out. The humidity is ' + body.current.humidity
            )
        }
    })
}


module.exports = forecast