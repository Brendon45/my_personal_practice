const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.use(logger)

app.get('/', (req, res) => {
    console.log('hi there')
    res.render('index', {text : "Get Ready !!!"})
})

const userRouter = require('./routes/user')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)

