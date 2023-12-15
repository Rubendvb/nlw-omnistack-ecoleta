import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const pointsController = new PointsController()
const itemsController = new ItemsController()

const routes = express.Router()
const uploads = multer(multerConfig)

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world!' })
})

routes.get('/items', itemsController.index)

routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

routes.post('/points', uploads.single('image'), pointsController.create)

export default routes
