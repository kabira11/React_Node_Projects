const request = require('request')

const geoCode = (address, callback) => {
        // encodeURIComponent(address) 
        const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicGFua2FqMTEwOSIsImEiOiJjazNiaDV2eHEwNjdwM2Z1aTI0ampwMHQ1In0.lZnakVQt5p9WapBiO0qE9A&limit=1'
    
        request({url: geoCodeUrl, json: true} , (err, {res}) => {
    
            if (err) {
                callback("Unable to connect to location services");
            } else if (res.body.features.length === 0){
                callback("Unable to find location, Try another search.");
            } else {
                // const latitude = res.body.features[0].center[1]
                // const longitude = res.body.features[0].center[0]
                callback(undefined, {
                    latitude: res.body.features[0].center[1],
                    longitude: res.body.features[0].center[0],
                    location: res.body.features[0].place_name
                })
            }
    
    
    })
    
    }
    

    module.exports = geoCode