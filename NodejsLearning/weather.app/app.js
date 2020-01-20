const geoCode = require('./utils/geocode')
const foreCast = require('./utils/foreCast')
const address = process.argv[2]

    if (!address) {
        console.log("Please provide an address")
    } else {
        // Destructuring 
        geoCode(address , (err, {latitude, longitude, location }) => {
            if(err) {
                return console.log("err")
            }
    
            foreCast(latitude , longitude , (err , foreCastData) => {
                if(err) {
                    return console.log("err")
                }
    
                console.log(location)
                console.log(foreCastData)
            })
    
        })
    
    }

// Geocode converts address in long/lat
// Address => Lat/Lang => Weather
// Using mapbox.com for geocode

// We're gonna be using a provides a geo coding service geo coding is the process of taking an address
// like Philadelphia United States and converting that into a latitude and longitude coordinate pair.