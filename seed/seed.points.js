require('dotenv').config()
console.log(__dirname, process.env.DB_NAME, process.env.DB_NAME, process.env.DB_PASSWORD);

const db = require('../db')
const fakeContent = require('./cars.api.json')

const writeSeeds = () => {
  console.log('Running seed...', fakeContent[0])
  fakeContent.map(async item => {
    await db.query('INSERT INTO points ( date, title, quantity, distance) values ($1, $2, $3, $4)  RETURNING *',
      [item.date, item.title, item.quantity, item.distance])
    console.log(item)
  })

}
writeSeeds()
// db.end()
