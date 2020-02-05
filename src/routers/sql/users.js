const express = require('express')
const Users = require('../../models/sql/user')
const router = new express.Router()

router.get('/users', async (req, res) => {
    // const user = new Users(req.body)
    // console.log(req.body,"req body")
    try {
        // const result = await Users.find({ })
        Users.findAll().then( user => {
            console.log(user)
            
        })
        res.status(200)
        
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users', async (req,res) =>{
    try {
        const user = new Users(req.body)
        await user.create()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

})

module.exports = router