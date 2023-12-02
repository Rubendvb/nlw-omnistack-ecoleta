import express from 'express'
import knex from './database/connection'

const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world!' })
})

routes.get('/items', async (req, res) => {
  const items = await knex('items').select('*')

  const serializedItems = items.map((item) => {
    return {
      title: item.title,
      image_url: `http://localhost:3000/uploads/${item.image}`,
    }
  })

  return res.json(serializedItems)
})

export default routes
