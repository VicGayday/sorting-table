const db = require('../db')

class PointsController {
  async createPoint(req, res) {
    const { date, title, quantity, distance } = req.body
    const newPoint = await db.query('INSERT INTO points ( date, title, quantity, distance) values ($1, $2, $3, $4) RETURNING *', [date, title, quantity, distance])
    console.log(newPoint, date, title, quantity, distance);
    res.json(newPoint.rows[0])
  }

  async getPoints(req, res) {
    const points = await db.query('SELECT * FROM points')
    res.json(points.rows)
  }

  async getOnePoint(req, res) {
    const id = req.params.id       //из параметра запроса надо получить id
    const point = await db.query('SELECT * FROM points where id = $1', [id])
    res.json(point.rows[0])                   // возвращаем обратно на клиент
  }

  async updatePoint(req, res) {
    const { id, date, title, quantity, distance } = req.body         //получим из тела запроса все данные
    const point = await db.query('UPDATE points set date=$1, title=$2, quantity=$3, distance=$4 where id = $5 RETURNING *',
      [date, title, quantity, distance, id])
    res.json(point.rows[0])            // результат запроса возвращаем обратно на клиент
  }

  async deletePoint(req, res) {
    const id = req.params.id       //из параметра запроса надо получить id
    const point = await db.query('DELETE  FROM points where id = $1', [id])
    res.json(point.rows[0])                   // возвращаем обратно
  }
}

module.exports = new PointsController