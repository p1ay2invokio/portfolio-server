import express = require('express')
import cors = require('cors')
import dotenv = require('dotenv')
import {Request, Response} from 'express'

const messageRoute = require('./routes/messages.route')
const productRoute = require('./routes/products.route')

const env = dotenv.config().parsed

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/messages", messageRoute)
app.use("/api/product", productRoute)

app.get("/api/test", (req: Request, res: Response)=>{
    res.status(200).send({messsage: "testing API"})
})

app.listen(env?.PORT, ()=>{
    console.log(`Server is running on port ${env?.PORT}`)
})