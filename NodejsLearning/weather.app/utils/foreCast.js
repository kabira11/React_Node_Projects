const request = require('request')

const foreCast = (latitude, longitude , callback) => {
    // console.log(address)
    // encodeURIComponent(address) 
        const url = 'https://api.darksky.net/forecast/a41bda2159dbfd69b66535b03cbddaab/' + encodeURIComponent(longitude) + ',' +encodeURIComponent(latitude)
    
        request({url: url, json: true} , (err, res) => {
    
            if (err) {
                callback("Unable to connect to weather services");
            } else if (res.body.error){
                callback("Unable to find location");
            } else {
                callback(undefined, {
                    // latitude: res.body.features[0].center[0],
                    // longitude: res.body.features[0].center[1],
                    summary: res.body.daily.data[0].summary
                })
            }
    })
    
    }

    module.exports = foreCast