const express = require('express')
require('./db/mongoose')
require('./db/sequelize');

const userRouter = require('./routers/mongo/users')
const usersRouter = require('./routers/sql/users')

const app = express()
app.use(express.json())
app.use(userRouter)
app.use(usersRouter)
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))