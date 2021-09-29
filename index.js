require('dotenv').config()
console.log(__dirname, process.env.DB_NAME, process.env.DB_NAME, process.env.DB_PASSWORD);
const express = require('express')
const cors = require("cors")
const path = require("path")
const pointsRouter = require('./routes/points.routes');

const PORT = process.env.SERVER_PORT || 3000  // process.env.PORT ||

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "./client")))

app.use('/api', pointsRouter)

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}



start()
