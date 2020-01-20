const path = require('path')
const express = require('express')

// __dirname and __filename is for diretory and file full path. 
console.log(__dirname)
console.log(path.join(__dirname , '../public'))


const publicDirectoryPath = path.join(__dirname , '../public')



const app = express()

app.set('view engine', 'hbs')


app.get('' , (req, res) => {
    res.render('index' , {
        title: 'Weather App',
        name: 'Pankaj'
    })
})
app.use(express.static(publicDirectoryPath))


app.get('/about' , (req, res) => {
    res.render('about' , {
        title: 'About App',
        name: 'Pankaj'
    })
})


app.get('/help' , (req, res) => {
    res.render('help' , {
        title: 'Help App',
        name: 'Pankaj'
    })
})


app.get('/help' , (req, res) => {
    res.send('Help Page')
})

app.get('/about' , (req, res) => {
    res.send('About Page')
})

app.get('/weather' , (req, res) => {
    res.send('Weather Page')
})

app.listen(3011 , () => {
    console.log("Server is running on port 3011")
})