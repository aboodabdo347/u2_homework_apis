const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
const axios = require('axios')
var indexRouter = require('./routers/index')
app.use('/', indexRouter)
app.listen(port, () => {
  console.log(`Server is running at ` + port)
})
