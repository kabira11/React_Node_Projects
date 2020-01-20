const router = require('express').Router()
const Exercise = require('../models/exerciseModel')


router.get('/' , async (req, res) => {

    try{
        const exercises = await Exercise.find()
        res.status(200).send({exercises})
    }catch(e){
        res.status(400).send(e)
    }

})


router.get('/:id' , async (req, res) => {

    try{
        const exercise = await Exercise.findOne({_id: req.params.id})
        res.send(exercise)
    }catch(e){
        res.status(400).send(e)
    }

})

// {
//     "username": "pankaj",
//     "description": "run",
//     "duration": 9,
//     "date":  "2019-10-24T21:55:07.321+00:00"
// }

router.post('/add' , async (req, res) => {
    const exercise = new Exercise(req.body)

    try{
        await exercise.save()
        res.status(201).send({exercise})
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.put('/update/:id' , async (req, res) => {
    console.log(req.params.id)
console.log(req.body)
    try{
        const exercise = await Exercise.findByIdAndUpdate({
            _id: req.params.id}
            ,req.body,{
                new : true,
                runValidators : true
            })
        res.status(201).send({exercise})
    }
    catch(e){
        res.status(400).send(e)
    }
})


module.exports = router