const express = require('express')
const cors = require('cors')
require('./db/mongoDB')
const exerciseRouter = require('./routes/exercise')
const userRouter = require('./routes/user')

const app = express()
const port = process.env.PORT || 4010

app.use(cors())
app.use(express.json())

app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)

app.listen(port , () => {
    console.log(`Server is running on port: ${port}`)
})
