import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

const port = process.env.PORT
app.listen(port, () => console.log(`Serving start on port ${port}`))
