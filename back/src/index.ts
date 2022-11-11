import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import db from 'helpers/db'

import { routes } from './routes'

const Port = process.env.PORT || 3000



dotenv.config()
const app = express()
app.use(cors)
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send(db.query('select * from inventories'))
})


app.listen(Port, () => {
    console.log(`started on port : ${Port}`)
})
