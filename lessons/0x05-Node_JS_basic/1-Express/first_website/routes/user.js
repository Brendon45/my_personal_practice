const express = require('express')
const router = express.Router() 

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.render("users/new")
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ name : req.body.name})
        res.redirect(`users/${users.length - 1}`)
    }
    else
    {
        console.log("Error")
        res.render('users/new', {name: req.body.name})
    }

    res.send("Hi")
})

router
    .route("/:userid")
    .get((req, res) => {
    console.log(req.user);
    res.send(`Get the user with id ${req.params.userid}`)
}).put((req, res) => {

    res.send(`Update the user with id ${req.params.userid}`)
}).delete((req, res) => {

    res.send(`Delete the user with id ${req.params.userid}`)
})

const users = [{ name: "Kelly"}, { name: "Sally"}]

router.param("userid", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router